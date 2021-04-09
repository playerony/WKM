import React from 'react'

import Logo from './Logo/Logo.component'
import { WelcomeProps } from './Welcome.types'

import { StyledVideo, StyledButton, StyledWrapper } from './Welcome.styles'

const Welcome = ({ onButtonClick }: WelcomeProps): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} autoPlay={true} src="/static/videos/home_page_video.mp4" />
    <Logo />
    <StyledButton onClick={onButtonClick}>Czym jest WKM</StyledButton>
  </StyledWrapper>
)

export default Welcome
