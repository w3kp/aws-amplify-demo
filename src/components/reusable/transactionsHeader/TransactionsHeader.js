import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Card, Typography } from 'antd'

import columns from './transactionColumns'

import TableComponent from 'components/ui/table'
import WalletComponent from '../walletComponent'
import * as styles from './TransactionsHeaderStyles'

const TransactionsHeader = ({ wallet }) => {
  const transactions = useSelector(state => state.transactionsReducer.transactions)

  const recentTransactions = () => {
    return (
      <Card style={styles.cardStyle}>
        <Typography.Title level={4} style={styles.cardTitleStyle}>
          Recent Cashier Transactions
        </Typography.Title>
        <TableComponent
          size='small'
          columns={columns}
          pagination={false}
          dataSource={transactions} />
      </Card>
    )
  }

  return (
    <Row gutter={[32, 0]}>
      <Col {...styles.cardLayout}>
        <Row gutter={[32, 0]}>
          <Col {...styles.cardLayout}>
            <WalletComponent title='Account Balance' value={wallet?.balance} />
          </Col>
          <Col {...styles.cardLayout}>
            <WalletComponent title='Affiliate Balance' value={wallet?.affiliateBalance} />
          </Col>
        </Row>
      </Col>
      <Col {...styles.cardLayout}>
        {recentTransactions()}
      </Col>
    </Row>
  )
}

export default React.memo(TransactionsHeader)
