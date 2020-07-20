import React from 'react'
import Webcam from 'react-webcam'
import ButtonComponent from 'components/ui/button'

const WebcamCapture = () => {
  const videoConstraints = {
    width: { min: 1024 },
    height: { min: 1024 },
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
      <Webcam videoConstraints={videoConstraints} width={280} height={280} audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
      <ButtonComponent block type='primary' onClick={capture}>
        Capture Photo
      </ButtonComponent>
      <div style={{ paddingTop: '40px', background: 'red' }}>{imgSrc && <img alt='' src={imgSrc} width={280} height={280} style={{ paddingTop: '60px', background: 'white' }} />}</div>
    </>
  )
}

export default WebcamCapture
