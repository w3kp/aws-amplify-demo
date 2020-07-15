import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'

import Amplify from 'aws-amplify'

import store from './redux'
import * as serviceWorker from './serviceWorker'

//=======

console.log(process.env)
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_REACT_APP_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_COGNITO_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_APP_ID,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
