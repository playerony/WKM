import styled from 'styled-components'

import { flexbox, alignItems, flexDirection, justifyContent } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

export const StyledVideo = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

export const StyledVideoMask = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.color.blue}33;
`

export const StyledContentWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  height: 100vh;
  overflow: hidden;
  position: absolute;

  ${flexbox()}
`

export const StyledDownloadSectionWrapper = styled.section`
  flex: 1;
  z-index: 20;
  padding: ${({ theme }) => theme.padding.big * 2}px;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('space-around')}
`

export const StyledContactSectionWrapper = styled.section`
  flex: 1;
  z-index: 20;
  padding: ${({ theme }) => theme.padding.big * 2}px;
`
