import { FormProps } from 'antd/lib/form'

export interface ContactFormProps extends FormProps {
  isLoading: boolean
  handleFinish: (values: any, resetFields: () => void) => void
}
