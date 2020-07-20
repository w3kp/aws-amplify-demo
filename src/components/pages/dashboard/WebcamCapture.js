import React from 'react'
import Webcam from 'react-webcam'
import ButtonComponent from 'components/ui/button'

const WebcamCapture = () => {
  const videoConstraints = {
    width: { min: 480 },
    height: { min: 480 },
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
      <Webcam videoConstraints={videoConstraints} width={480} height={280} audio={false} ref={webcamRef} screenshotFormat='image/jpeg' style={{ margin: '40px 0' }} />
      <ButtonComponent block type='primary' onClick={capture}>
        Capture Photo
      </ButtonComponent>
      {imgSrc && <img alt='' src={imgSrc} style={{ margin: '40px 0' }} width={480} height={480} />}
    </>
  )
}

export default WebcamCapture
