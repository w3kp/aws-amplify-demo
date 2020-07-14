import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Layout, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import * as userActions from 'redux/actions/users'

import SignupForm from './SignupForm'
import * as styles from './SignupStyles'
import SignupComplete from './SignupComplete'

const { Title, Text, Paragraph } = Typography

const Signup = () => {
  const apiError = useSelector((state) => state.usersReducer.error)
  const loading = useSelector((state) => state.usersReducer.loading)
  const registeredUser = useSelector((state) => state.usersReducer.registeredUser)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.userRegisteredClear())
  }, [dispatch])

  const onRegister = (values) => {
    delete values.confirmPassword
    dispatch(userActions.userRegisterRequest(values))
  }

  const clearError = () => {
    dispatch(userActions.userErrorClear())
  }

  const displayComplete = () => {
    return <SignupComplete registeredUser={registeredUser} />
  }

  const displayRegister = () => {
    return (
      <Col {...styles.columnLayout}>
        <Row>
          <Col {...styles.titleLayout}>
            <Title>Registration</Title>
            <Text type='secondary'>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</Text>
          </Col>
        </Row>
        <SignupForm loading={loading} submit={onRegister} apiError={apiError} />
        <Paragraph style={{ textAlign: 'center' }}>
          <Text>Already have an account? </Text>
          <Link to='/login' style={{ color: '#531dab' }} onClick={() => clearError()} className={loading ? 'disable-link' : null}>
            Sign in
          </Link>
        </Paragraph>
      </Col>
    )
  }

  return (
    <Layout style={styles.layoutStyle}>
      <styles.SignupContainer>{registeredUser ? displayComplete() : displayRegister()}</styles.SignupContainer>
    </Layout>
  )
}

export default Signup
