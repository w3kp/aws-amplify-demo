import React, { Suspense, lazy } from 'react'
import { Switch, Router, Redirect } from 'react-router-dom'

import history from 'helpers/history'

import Loader from 'components/ui/loader'
import PublicRoute from 'components/routes/public'
import PrivateRoute from 'components/routes/private'

const Home = lazy(() => import('components/pages/home'))
const Login = lazy(() => import('components/pages/login'))
const Signup = lazy(() => import('components/pages/signup'))

const App = () => {
  const displayLoader = () => {
    return (
      <div style={{ height: '100vh' }}>
        <Loader />
      </div>
    )
  }

  return (
    <Router history={history}>
      <Suspense fallback={displayLoader()}>
        <Switch>
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/signup' component={Signup} />
          <PrivateRoute path='/' component={Home} />
          <Redirect to='/login' />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
