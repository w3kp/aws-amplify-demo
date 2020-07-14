import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { HomeOutlined } from '@ant-design/icons'

const ContentHeader = ({ location }) => {
  const pathSnippets = location.pathname.split('/').filter(path => path)
  const breadcrumbs = pathSnippets.map((path, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const title = path === 'trade-history'
      ? 'Trade History'
      : path.charAt(0).toUpperCase() + path.slice(1)

    return (
      <Breadcrumb.Item key={path}>
        <Link to={url}>{title}</Link>
      </Breadcrumb.Item>
    )
  })

  if (pathSnippets[0] === 'dashboard') {
    return null
  }

  return (
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item>
        <Link to='/dashboard'>
          <HomeOutlined />
        </Link>
      </Breadcrumb.Item>
      {breadcrumbs}
    </Breadcrumb>
  )
}

export default withRouter(ContentHeader)
