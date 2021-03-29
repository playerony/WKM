import React from 'react'

import { StyledWrapper, StyledLabel, StyledLoader } from './InstructionPage.styles'
// import { LoadingPageProps } from './InstructionPage.types'

const LoadingPage = (): JSX.Element => (
  <StyledWrapper>
    <StyledLoader />
    <StyledLabel>przeciągnij, aby przeglądać</StyledLabel>
  </StyledWrapper>
)

export default LoadingPage
