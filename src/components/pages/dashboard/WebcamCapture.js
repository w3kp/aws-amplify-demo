import React from 'react'
import Webcam from 'react-webcam'
import ButtonComponent from 'components/ui/button'

const WebcamCapture = () => {
  const videoConstraints = {
    width: { min: 3840 },
    height: { min: 2160 },
    aspectRatio: 1.333333333,
    // facingMode: { exact: 'user' },
    facingMode: 'user',
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
      <Webcam videoConstraints={videoConstraints} width={420} height={720} audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />

      <ButtonComponent block type='primary' onClick={capture}>
        Capture Photo
      </ButtonComponent>
      {imgSrc && <img alt='' src={imgSrc} />}
    </>
  )
}

export default WebcamCapture
