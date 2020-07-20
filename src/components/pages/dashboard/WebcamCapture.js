import React from 'react'
import Webcam from 'react-webcam'
import ButtonComponent from 'components/ui/button'

const WebcamCapture = () => {
  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: { exact: 'environment' },
  }

  const webcamRef = React.useRef(null)
  const [imgSrc, setImgSrc] = React.useState(null)

  const capture = React.useCallback(() => {
    console.log(webcamRef)
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    console.log(imageSrc)
  }, [webcamRef, setImgSrc])

  return (
    <>
      <Webcam videoConstraints={videoConstraints} width={440} height={720} audio={false} ref={webcamRef} screenshotFormat='image/jpeg' style={{ margin: '40px 0' }} />
      <ButtonComponent block type='primary' onClick={capture}>
        Capture Photo
      </ButtonComponent>
      {imgSrc && <img alt='' src={imgSrc} style={{ margin: '40px 0' }} />}
    </>
  )
}

export default WebcamCapture
