import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  overflow: hidden;

  .ant-table th {
    white-space: nowrap;
  }

  .ant-table {
    width: 100%;
    overflow-y: scroll;
  }

  .ant-table-thead th {
    color: #d4b106;
  }

  .ant-pagination-options {
    display: none;
  }
`
