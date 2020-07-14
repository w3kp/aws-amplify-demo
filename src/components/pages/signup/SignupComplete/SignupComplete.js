import React from 'react'
import { Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { CheckCircleTwoTone } from '@ant-design/icons'

import * as styles from './SignupCompleteStyles'

const { Title, Text, Paragraph } = Typography

const SignupComplete = () => {
  return (
    <Col {...styles.columnLayout}>
      <CheckCircleTwoTone twoToneColor='#52c41a' style={styles.iconStyle} />
      <Title level={4} style={{ textAlign: 'center' }}>
        <Text>Account successfully registered!</Text>
        {/* <Link to='/login' style={{ color: '#531dab' }}>
          Sign in
        </Link>
        <Text> to use your account.</Text> */}
      </Title>
      <Paragraph style={styles.redirectStyles}>
        <Text>You can signin your acount here. </Text>
        <Link to='/login' style={{ color: '#531dab' }}>
          Sign in
        </Link>
      </Paragraph>
    </Col>
  )
}

export default SignupComplete
