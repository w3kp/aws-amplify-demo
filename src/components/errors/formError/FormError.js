import React from 'react'
import { Form, Alert } from 'antd'

const FormError = ({ error }) => {
  return error ? (
    <Form.Item>
      <Alert message={error} type='error' />
    </Form.Item>
  ) : null
}

export default FormError
