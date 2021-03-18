import React from 'react'

import Divider from 'antd/lib/divider'
import Typography from 'antd/lib/typography'

import {
  StyledVideo,
  StyledWrapper,
  StyledVideoMask,
  StyledContentWrapper
} from './Idea.styles'
import variables from '@styles/variables'

import ideaVideo from '@public/idea_page_video.mp4'

const { Text, Title } = Typography

const Idea = (): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} autoPlay={true} src={ideaVideo} />
    <StyledVideoMask />
    <StyledContentWrapper>
      <Title style={{ color: variables.color.cream }}>Pomysł</Title>
      <Divider style={{ borderTopColor: variables.color.cream }} />
      <Text
        style={{
          maxWidth: 500,
          lineHeight: 2,
          display: 'block',
          letterSpacing: 3,
          color: variables.color.cream
        }}
      >
        Sam pomysł stworzenia klubu zrodził się w ich głowach dopiero wiosną
        2008 roku podczas wypadu na Słowację. Tam właśnie padły pierwsze
        pomysły, w tym nasza obecna nazwa.
      </Text>
    </StyledContentWrapper>
  </StyledWrapper>
)

export default Idea
