import React from 'react'

import { StyledWrapper, StyledLoader, StyledLoaderFragment } from './LoadingPage.styles'
import { LoadingPageProps } from './LoadingPage.types'

const LoadingPage = ({ isLoading }: LoadingPageProps): JSX.Element => (
  <StyledWrapper isLoading={isLoading}>
    <StyledLoader>
      <StyledLoaderFragment></StyledLoaderFragment>
      <StyledLoaderFragment></StyledLoaderFragment>
      <StyledLoaderFragment></StyledLoaderFragment>
      <StyledLoaderFragment></StyledLoaderFragment>
    </StyledLoader>
  </StyledWrapper>
)

export default LoadingPage
