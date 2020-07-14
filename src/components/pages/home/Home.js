import React, { lazy, Suspense, useCallback } from 'react'
import { Layout } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

import { userLogoutRequest } from 'redux/actions/users'

import * as styles from './HomeStyles'
import Loader from 'components/ui/loader'
import ContentHeader from './ContentHeader'
import ButtonComponent from 'components/ui/button'

const Dashboard = lazy(() => import('../dashboard'))

const Home = () => {
  const loading = useSelector((state) => state.usersReducer.loading)

  const dispatch = useDispatch()

  const logoutCB = useCallback(() => {
    dispatch(userLogoutRequest())
  }, [dispatch])

  if (loading) {
    return (
      <div style={{ height: '100vh' }}>
        <Loader />
      </div>
    )
  }

  return (
    <Layout style={styles.mainLayoutStyle}>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Layout.Content style={styles.contentStyle}>
            <ContentHeader />
            <Switch>
              <Route path='/dashboard' component={Dashboard} />
              <Redirect to='/dashboard' />
            </Switch>
            <div width='200px' style={{ marginTop: '40px' }}>
              <ButtonComponent type='primary' onClick={logoutCB}>
                SIGN OUT
              </ButtonComponent>
            </div>
          </Layout.Content>
        </Suspense>
      </Layout>
    </Layout>
  )
}

export default Home
