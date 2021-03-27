import React from 'react'

import Logo from './Logo/Logo.component'
import { WelcomeProps } from './Welcome.types'

import { StyledVideo, StyledButton, StyledWrapper, StyledVideoMask } from './Welcome.styles'
import homeVideo from '@public/home_page_video.mp4'

const Welcome = ({ onVideoLoad, onButtonClick }: WelcomeProps): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} src={homeVideo} autoPlay={true} onPlay={onVideoLoad} />
    <StyledVideoMask />
    <Logo />
    <StyledButton onClick={onButtonClick}>Czym jest WKM</StyledButton>
  </StyledWrapper>
)

export default Welcome
