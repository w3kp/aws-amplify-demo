import React, { lazy, Suspense } from 'react'
import { Layout } from 'antd'
import { Route, Switch, Redirect } from 'react-router-dom'

import * as styles from './HomeStyles'
import Loader from 'components/ui/loader'
import ContentHeader from './ContentHeader'

const Dashboard = lazy(() => import('../dashboard'))

const Home = () => {
  return (
    <Layout style={styles.mainLayoutStyle}>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Layout.Content style={styles.contentStyle}>
            <ContentHeader />
            <Switch>
              <Route path='/home' component={Dashboard} />
              <Redirect to='/home' />
            </Switch>
          </Layout.Content>
        </Suspense>
      </Layout>
    </Layout>
  )
}

export default Home
