import { message } from 'antd'

export default text => {
  navigator.clipboard.writeText(text)
  message.success('Copied to Clipboard')
}
