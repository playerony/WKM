import React from 'react'

import { StyledVideo, StyledWrapper, StyledVideoMask } from './History.styles'
import homeVideo from '@public/history_page_video.mp4'

const Welcome = (): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} src={homeVideo} autoPlay={true} />
    <StyledVideoMask />
  </StyledWrapper>
)

export default Welcome
