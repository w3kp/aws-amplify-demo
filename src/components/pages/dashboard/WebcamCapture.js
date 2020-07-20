import React from 'react'
import Webcam from 'react-webcam'
import ButtonComponent from 'components/ui/button'

const WebcamCapture = () => {
  const videoConstraints = {
    width: { min: 1024 },
    height: { min: 1024 },
    // facingMode: { exact: 'environment' },
    facingMode: 'user',
  }

  const webcamRef = React.useRef(null)
  const [imgSrc, setImgSrc] = React.useState(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

  return (
    <>
      <Webcam videoConstraints={videoConstraints} width={280} audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
      <ButtonComponent type='primary' onClick={capture} style={{ paddingBottom: '40px' }}>
        Capture Photo
      </ButtonComponent>
      {imgSrc && <img alt='' src={imgSrc} width={280} style={{ paddingTop: '60px', background: 'transparent' }} />}
    </>
  )
}

export default WebcamCapture
