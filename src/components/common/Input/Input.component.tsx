import React, { useState, FocusEvent } from 'react'

import { InputProps } from './Input.type'
import { StyledInput, StyledLabel, StyledWrapper } from './Input.styles'

const Input = ({ label, onBlur, onFocus, wrapperStyles, ...restProps }: InputProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    setIsFocus(true)

    onFocus && onFocus(event)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    setIsFocus(false)

    onBlur && onBlur(event)
  }

  const isFocusOrValue = isFocus || !!restProps.value

  return (
    <StyledWrapper style={wrapperStyles}>
      <StyledInput onBlur={handleBlur} onFocus={handleFocus} isInputFocus={isFocusOrValue} {...restProps} />
      {label && (
        <StyledLabel level={4} isInputFocus={isFocus || !!restProps.value}>
          {label}
        </StyledLabel>
      )}
    </StyledWrapper>
  )
}

export default React.memo(Input)
