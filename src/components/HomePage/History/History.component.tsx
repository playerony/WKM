import React from 'react'

import Divider from 'antd/lib/divider'
import Typography from 'antd/lib/typography'

import {
  StyledVideo,
  StyledWrapper,
  StyledVideoMask,
  StyledContentWrapper
} from './History.styles'
import variables from '@styles/variables'

import historyVideo from '@public/history_page_video.mp4'

const { Text, Title } = Typography

const Welcome = (): JSX.Element => (
  <StyledWrapper>
    <StyledVideo loop={true} muted={true} autoPlay={true} src={historyVideo} />
    <StyledVideoMask />
    <StyledContentWrapper>
      <Title style={{ color: variables.color.cream }}>Historia</Title>
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
        Historia powstania klubu, to historia ludzi, którzy zarazili nas swoją
        pasją, stylem życia i miłością do motocykli. Nie sposób nie wymienić
        takich nazwisk jak Bartek KOSAR, Mirek BANIA czy Rafał GÓRSKI.
      </Text>
    </StyledContentWrapper>
  </StyledWrapper>
)

export default Welcome
