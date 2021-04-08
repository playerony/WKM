import React from 'react'

import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styles'

const Button = ({ children, ...restProps }: ButtonProps): JSX.Element => <StyledButton {...restProps}>{children}</StyledButton>

export default React.memo(Button)
