import styled from 'styled-components'

export const columnLayout = {
  xl: {
    span: 10,
    offset: 7
  },
  md: {
    span: 14,
    offset: 5
  },
  xs: {
    span: 20,
    offset: 2
  },
}

export const titleLayout = {
  md: {
    span: 16,
    offset: 4
  },
  xs: {
    span: 24
  },
  style: {
    marginBottom: '2rem'
  }
}

export const layoutStyle = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  justifyContent: 'center'
}

export const SignupContainer = styled.div`
  padding: 1rem 0 0;
  width: 100%;
  display: flex;
  overflow: auto;
`
