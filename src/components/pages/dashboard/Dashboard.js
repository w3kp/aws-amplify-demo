import React from 'react'
import { Typography } from 'antd'
import Webcam from 'react-webcam'
import ButtonComponent from 'components/ui/button'

import * as styles from './DashboardStyles'

const { Text } = Typography

const Dashboard = () => {
  const videoConstraints = {
    width: { min: 2048 },
    height: { min: 2048 },
    aspectRatio: 1,
    facingMode: { exact: 'environment' },
  }
  const webcamRef = React.useRef(null)
  const [imgSrc, setImgSrc] = React.useState(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

  return (
    <>
      <Typography.Title level={3} style={styles.titleStyle}>
        Photo Uploader
        <ButtonComponent type='primary' onClick={capture} style={{ paddingBottom: '40px' }}>
          Capture Photo
        </ButtonComponent>
      </Typography.Title>

      <Text type='secondary'>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</Text>
      <Webcam videoConstraints={videoConstraints} width={280} audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
      {imgSrc && <img alt='' src={imgSrc} width={280} style={{ paddingTop: '60px', background: 'transparent' }} />}
    </>
  )
}

export default Dashboard
