import React from 'react'
import { Progress, Typography } from 'antd'

import { limitDay } from 'redux/constants/withdrawal-types'

import * as styles from './TradingDaysStyles'

const { Text, Paragraph } = Typography

const TradingDays = ({ days }) => {
  const percent = (days / limitDay) * 100

  return (
    <>
      <Paragraph style={styles.titleStyle}>NUMBER OF DAYS TRADING - {days} Days</Paragraph>
      <Progress
        showInfo={false}
        percent={percent}
        strokeLinecap='square' />
      <styles.DaysContainer>
        <Text>0</Text>
        <Text>30</Text>
        <Text>60</Text>
        <Text>90</Text>
      </styles.DaysContainer>
    </>
  )
}

export default TradingDays
