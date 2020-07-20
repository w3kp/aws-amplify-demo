import React from 'react'
import { Typography } from 'antd'
import ButtonComponent from 'components/ui/button'

import * as styles from './DashboardStyles'

import WebcamCapture from './WebcamCapture'

const { Text } = Typography

const Dashboard = () => {
  return (
    <>
      <ButtonComponent type='primary'>Capture Photo</ButtonComponent>
      <Typography.Title level={3} style={styles.titleStyle}>
        Photo Uploader
      </Typography.Title>
      <Text type='secondary'>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</Text>
      <WebcamCapture />
    </>
  )
}

export default Dashboard
