import { CSSProperties } from 'styled-components'
import { InputProps as AntdInputProps } from 'antd/lib/input'

export interface InputProps extends AntdInputProps {
  label?: string
  wrapperStyles?: CSSProperties
}
