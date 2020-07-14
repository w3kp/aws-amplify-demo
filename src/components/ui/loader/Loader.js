import React from 'react'
import { Spin } from 'antd'
import styled from 'styled-components'

export const LoaderLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader = () => (
  <LoaderLayout>
    <Spin size='large' />
  </LoaderLayout>
)

export default Loader
