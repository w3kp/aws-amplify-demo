import React from 'react'
import { Form, Input } from 'antd'

import formRules from 'helpers/formRules'
import * as styles from './SignupFormStyles'
import ButtonComponent from 'components/ui/button'
import FormError from 'components/errors/formError'

const SignupForm = (props) => {
  const { submit, loading, apiError } = props

  const [form] = Form.useForm()

  const initialValues = {}

  return (
    <Form {...styles.formLayout} form={form} onFinish={submit} name='registration' initialValues={initialValues}>
      <FormError error={apiError} />
      <Form.Item name='username' rules={formRules.username}>
        <Input placeholder='Username' />
      </Form.Item>
      <Form.Item name='email' rules={formRules.createEmail}>
        <Input placeholder='Email Address' />
      </Form.Item>
      <Form.Item name='password' rules={formRules.createPassword}>
        <Input.Password placeholder='Password' />
      </Form.Item>
      <Form.Item name='confirmPassword' dependencies={['password']} rules={formRules.confirmPassword}>
        <Input.Password placeholder='Confirm Password' />
      </Form.Item>
      <Form.Item {...styles.signinLayout}>
        <ButtonComponent block type='primary' htmlType='submit' loading={loading}>
          REGISTER
        </ButtonComponent>
      </Form.Item>
    </Form>
  )
}

export default SignupForm
