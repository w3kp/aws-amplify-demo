import React from 'react'
import { Typography } from 'antd'

import * as styles from './DashboardStyles'

const { Text } = Typography

const Dashboard = () => {
  return (
    <>
      <Typography.Title style={styles.titleStyle}>WELCOME {localStorage.username}!</Typography.Title>
      <Text type='secondary'>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</Text>
    </>
  )
}

export default Dashboard
