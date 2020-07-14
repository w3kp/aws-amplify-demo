import React from 'react'
import { Upload, Typography } from 'antd'
import { UploadOutlined, PlusOutlined } from '@ant-design/icons'

import ButtonComponent from '../button'
import Loader from 'components/ui/loader'

const { Text, Paragraph } = Typography

const UploadComponent = props => {
  const {
    loading,
    disabled,
    listType,
    imageUrl,
    setFileList,
    loadingAvatar
  } = props

  const beforeUpload = file => {
    setFileList(file)

    return false
  }

  const onRemove = () => {
    setFileList(null)
  }

  const displayAvatar = () => {
    return loadingAvatar
      ?  <Loader />
      : (
        <div>
          <PlusOutlined />
          <Paragraph>Upload</Paragraph>
        </div>
      )
  }

  const displayAvatarUpload = () => {
    return (
      <Upload {...props} beforeUpload={beforeUpload}>
        {imageUrl && !loadingAvatar
          ? (<img src={imageUrl} alt="avatar" style={{ width: '100%' }} />)
          : displayAvatar()}
      </Upload>
    )
  }

  const displayNormalUpload = () => {
    return (
      <>
        <Text style={{ margin: '0 1rem' }}>CHOOSE FILE</Text>
        <Upload
          {...props}
          onRemove={onRemove}
          beforeUpload={beforeUpload}>
          <ButtonComponent
            size='small'
            loading={loading}
            disabled={disabled}
            icon={<UploadOutlined />}>
             Upload
          </ButtonComponent>
        </Upload>
      </>
    )
  }

  return listType === 'picture-card'
    ? displayAvatarUpload()
    : displayNormalUpload()
}

export default UploadComponent
