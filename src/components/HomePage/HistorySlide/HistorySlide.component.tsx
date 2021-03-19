import React from 'react'

import {
  StyledTitle,
  StyledVideo,
  StyledDivider,
  StyledWrapper,
  StyledVideoMask,
  StyledDescription,
  StyledContentWrapper
} from './HistorySlide.styles'
import { HistorySlideProps } from './HistorySlide.types'

const HistorySlide = ({
  title,
  description,
  backgroundVideo
}: HistorySlideProps): JSX.Element => (
  <StyledWrapper>
    <StyledVideo
      loop={true}
      muted={true}
      autoPlay={true}
      src={backgroundVideo}
    />
    <StyledVideoMask />
    <StyledContentWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDivider />
      <StyledDescription>{description}</StyledDescription>
    </StyledContentWrapper>
  </StyledWrapper>
)

export default HistorySlide
