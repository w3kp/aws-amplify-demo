import React from 'react'
import { Card, Typography } from 'antd'

import * as styles from './WalletComponentStyles'

const { Title, Paragraph } = Typography

const WalletComponent = ({ title, value }) => {
  return (
    <Card style={styles.cardStyle}>
      <Title level={4} style={styles.cardTitleStyle}>{title}</Title>
      <Title level={4} style={styles.cardContentStyle}>{value}</Title>
      <Paragraph style={styles.subTitleStyle}>BTC</Paragraph>
    </Card>
  )
}

export default React.memo(WalletComponent)
