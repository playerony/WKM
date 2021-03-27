import React from 'react'

import { ButtonProps } from './Button.type'
import { StyledButton } from './Button.style'

const Button = ({ children, ...restProps }: ButtonProps): JSX.Element => <StyledButton {...restProps}>{children}</StyledButton>

export default Button
