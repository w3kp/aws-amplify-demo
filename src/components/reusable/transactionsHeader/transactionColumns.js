import React from 'react'
import moment from 'moment'

export default [
  {
    title: 'DATE',
    key: 'createdOn',
    dataIndex: 'createdOn',
    render: text => (
      <span style={{ fontSize: '10px' }}>
        {moment(new Date(text)).format('MMM D LT')}
      </span>
    )
  },
  {
    key: 'type',
    title: 'TYPE',
    dataIndex: 'type',
    render: text => (
      <span style={{ textTransform: 'capitalize', fontSize: '10px' }}>{text}</span>
    )
  },
  {
    key: 'amount',
    title: 'AMOUNT',
    render: (text, record) => (
      <span style={{ fontSize: '10px' }}>
        {record.debit !== 0 ? `-${record.debit}` : `+${record.credit}`}
      </span>
    )
  },
  {
    key: 'transactionId',
    title: 'REFERENCE #',
    dataIndex: 'transactionId',
    render: text => (
      <span style={{ fontSize: '10px' }}>{text}</span>
    )
  }
]
