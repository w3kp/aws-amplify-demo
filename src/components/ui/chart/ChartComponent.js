import React from 'react'
import { Typography } from 'antd'
import Chart from 'react-apexcharts'

import Loader from 'components/ui/loader'

const ChartComponent = props => {
  const { data, config, loading } = props

  if (loading) {
    return <Loader />
  }

  const chartData = {
    ...config,
    series: [{ data }]
  }

  return (
    <div>
      <Chart {...chartData} />
      <Typography.Paragraph style={{ color: '#d4b106' }}>
        Our blockchain charts are best viewed on a desktop.
      </Typography.Paragraph>
    </div>
  )
}

export default React.memo(ChartComponent)
