import React from 'react'

import { StyledWrapper, StyledLabel, StyledLoader } from './InstructionPage.styles'

const InstructionPage = (): JSX.Element => (
  <StyledWrapper>
    <StyledLoader />
    <StyledLabel>przeciągnij, aby przeglądać</StyledLabel>
  </StyledWrapper>
)

export default InstructionPage
