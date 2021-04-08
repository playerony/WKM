import { ReactNode } from 'react'
import { ButtonProps as AntdButtonProps } from 'antd/lib/button'

export interface ButtonProps extends AntdButtonProps {
  children: ReactNode
}
