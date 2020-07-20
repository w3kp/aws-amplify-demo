import React, { Suspense, lazy } from 'react'
import { Switch, Router, Redirect } from 'react-router-dom'

import history from 'helpers/history'

import Loader from 'components/ui/loader'
import PublicRoute from 'components/routes/public'

const Home = lazy(() => import('components/pages/home'))

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
          <PublicRoute path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
