import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  return !localStorage.getItem('token')
    ? <Route {...rest} component={Component} />
    : <Redirect to='/' />
}

export default PublicRoute
