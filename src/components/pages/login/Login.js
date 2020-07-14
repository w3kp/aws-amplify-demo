import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Layout, Divider, Typography } from 'antd'

import { userLoginRequest, userErrorClear } from 'redux/actions/users'

import LoginForm from './LoginForm'
import * as styles from './LoginStyles'

const { Title, Text, Paragraph } = Typography

const Login = () => {
  const apiError = useSelector((state) => state.usersReducer.error)
  const loading = useSelector((state) => state.usersReducer.loading)

  const dispatch = useDispatch()

  const onLogin = (values) => {
    dispatch(userLoginRequest(values))
  }

  const clearErrorCB = useCallback(() => {
    dispatch(userErrorClear())
  }, [dispatch])

  return (
    <Layout style={styles.layoutStyle}>
      <Layout.Content style={styles.contentStyle}>
        <Col {...styles.columnLayout}>
          <Title>Sign In</Title>
          <Text type='secondary'>Failure will never overtake me if my determination to succeed is strong enough.</Text>
          <Divider />
          <LoginForm submit={onLogin} loading={loading} apiError={apiError} clearError={clearErrorCB} />
          <Paragraph style={{ textAlign: 'center' }}>
            <Text>Don't have an account? </Text>
            <Link to='/signup' style={{ color: '#531dab' }} onClick={() => clearErrorCB()} className={loading ? 'disable-link' : null}>
              Sign Up
            </Link>
          </Paragraph>
        </Col>
      </Layout.Content>
    </Layout>
  )
}

export default Login
