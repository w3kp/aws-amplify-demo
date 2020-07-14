import styled from 'styled-components'

export const columnLayout = {
  xl: {
    span: 8,
    offset: 8,
  },
  md: {
    span: 12,
    offset: 6,
  },
  xs: {
    span: 20,
    offset: 2,
  },
}

export const titleLayout = {
  style: {
    marginBottom: '2rem',
  },
}

export const layoutStyle = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  justifyContent: 'center',
}

export const SignupContainer = styled.div`
  padding: 1rem 0 0;
  width: 100%;
  display: flex;
  overflow: auto;
`
