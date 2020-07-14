import axios from 'axios'

import history from 'helpers/history'

const multipartUrls = [
  '/user/docs',
  '/user/withdrawals',
  '/user/profile-pic'
]

const removeAndReload = () => {
  localStorage.removeItem('token')
  window.location.reload(false)
}

let instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  const multipart = multipartUrls.find(url => url === config.url)

  if (token) {
    config.headers.Authorization =  'Bearer ' + token
  }

  if (multipart) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }

  return config
})

instance.interceptors.response.use(
  res => {
    const { url, method } = res.config

    if (url === '/user'
      && method === 'get'
      && res.data.data.user.role !== 'client') {
      removeAndReload()
    }

    return res
  },
  err => {
    if (err.message === 'Network Error' || err.response.status === 500) {
      history.push('/internal-error')
    } else if (localStorage.getItem('token') && err.response.status === 401) {
      removeAndReload()
    }

    return Promise.reject(err)
  }
)

export default instance
