import React from 'react'
import { Table } from 'antd'

import * as styles from './TableComponentStyles'

const TableComponent = props => {
  const { dataSource } = props

  const newDataSource = dataSource.map((data, index) => {
    return {
      ...data,
      key: index
    }
  })

  return (
    <styles.TableContainer>
      <Table {...props} dataSource={newDataSource} />
    </styles.TableContainer>
  )
}

export default TableComponent
