import React from 'react'

import Logo from './Logo/Logo.component'
import { WelcomeProps } from './Welcome.types'

import { StyledVideo, StyledButton, StyledWrapper, StyledVideoMask } from './Welcome.styles'

const Welcome = ({ onButtonClick }: WelcomeProps): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} autoPlay={true} src="/static/video/home_page_video.mp4" />
    <StyledVideoMask />
    <Logo />
    <StyledButton onClick={onButtonClick}>Czym jest WKM</StyledButton>
  </StyledWrapper>
)

export default Welcome
