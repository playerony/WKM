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

export const StyledButton = styled.span`
  left: 50%;
  bottom: 70px;
  width: 126px;
  font-size: 12px;
  position: absolute;
  margin-left: -63px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 9px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.cream};
  padding-top: ${({ theme }) => theme.padding.small / 2}px;
  border-top: 1px solid ${({ theme }) => theme.color.cream}55;
  border-bottom: 1px solid ${({ theme }) => theme.color.cream}55;
`
