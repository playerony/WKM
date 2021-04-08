import React from 'react'

import { StyledWrapper, StyledLogo, StyledLabel, StyledLoader, StyledInstructionWrapper } from './InstructionPage.styles'

const InstructionPage = (): JSX.Element => (
  <StyledWrapper>
    <StyledLogo />
    <StyledInstructionWrapper>
      <StyledLoader />
      <StyledLabel>przeciągnij, aby przeglądać</StyledLabel>
    </StyledInstructionWrapper>
  </StyledWrapper>
)

export default InstructionPage
