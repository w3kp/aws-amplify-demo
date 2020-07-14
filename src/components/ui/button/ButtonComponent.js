import React from 'react'
import { Button } from 'antd'

import * as styles from './ButtonComponentStyles'

const ButtonComponent = (props) => {
  const style = props.type === 'secondary' ? styles.secondaryStyle : styles.primaryStyle

  return (
    <Button {...props} style={style}>
      {props.children}
    </Button>
  )
}

export default ButtonComponent
