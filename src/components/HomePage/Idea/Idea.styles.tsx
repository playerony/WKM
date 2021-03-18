import styled from 'styled-components'

import { flexbox } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  ${flexbox()}
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
  background-color: ${({ theme }) => theme.color.purple}33;
`

export const StyledContentWrapper = styled.section`
  top: 60%;
  left: 20%;
  display: block;
  position absolute;
`
