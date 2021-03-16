import React from 'react'

import Logo from './Logo/Logo.component'

import homeVideo from '@public/home_page_video.mp4'
import {
  StyledVideo,
  StyledButton,
  StyledWrapper,
  StyledVideoMask
} from './Welcome.styles'

const Welcome = (): JSX.Element => (
  <StyledWrapper>
    <StyledVideo src={homeVideo} autoPlay={true} muted={true} loop={true} />
    <StyledVideoMask />
    <Logo />
    <StyledButton>Czym jest WKM</StyledButton>
  </StyledWrapper>
)

export default Welcome
