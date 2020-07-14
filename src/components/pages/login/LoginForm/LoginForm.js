import React from 'react'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'

import formRules from 'helpers/formRules'

import * as styles from './LoginFormStyles'
import ButtonComponent from 'components/ui/button'
import FormError from 'components/errors/formError'

const LoginForm = (props) => {
  const { submit, loading, apiError, clearError } = props

  return (
    <Form {...styles.formLayout} name='login' onFinish={submit}>
      <FormError error={apiError} />
      <Form.Item name='usernameEmail' rules={formRules.usernameEmail}>
        <Input placeholder='Username or Email' />
      </Form.Item>
      <Form.Item name='password' rules={formRules.password}>
        <Input.Password placeholder='Password' />
      </Form.Item>
      <Form.Item style={{ textAlign: 'right' }}>
        <Link to='/#' style={{ color: '#531dab' }} onClick={() => clearError()} className={loading ? 'disable-link' : null}>
          Forgot password?
        </Link>
      </Form.Item>
      <Form.Item {...styles.signinLayout}>
        <ButtonComponent block type='primary' htmlType='submit' loading={loading}>
          SIGN IN
        </ButtonComponent>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
