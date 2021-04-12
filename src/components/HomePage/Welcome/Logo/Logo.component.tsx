import React from 'react'

import { StyledText, StyledWrapper, StyledFullWidthDivider } from './Logo.styles'

const Logo = (): JSX.Element => (
  <StyledWrapper>
    <StyledText>wojskowy</StyledText>
    <StyledFullWidthDivider>
      <StyledText>klub</StyledText>
    </StyledFullWidthDivider>
    <StyledText>motocyklowy</StyledText>
  </StyledWrapper>
)

export default Logo
