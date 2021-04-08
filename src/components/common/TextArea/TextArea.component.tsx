import React, { useState, FocusEvent } from 'react'

import { TextAreaProps } from './TextArea.types'
import { StyledTextArea, StyledLabel, StyledWrapper } from './TextArea.styles'

const TextArea = ({ label, onBlur, onFocus, ...restProps }: TextAreaProps): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>): void => {
    setIsFocus(true)

    onFocus && onFocus(event)
  }

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>): void => {
    setIsFocus(false)

    onBlur && onBlur(event)
  }

  const isFocusOrValue = isFocus || !!restProps.value

  return (
    <StyledWrapper>
      <StyledTextArea onBlur={handleBlur} onFocus={handleFocus} isTextAreaFocus={isFocusOrValue} {...restProps} />
      <StyledLabel level={4} isTextAreaFocus={isFocusOrValue}>
        {label}
      </StyledLabel>
    </StyledWrapper>
  )
}

export default React.memo(TextArea)
