import styled from 'styled-components'

import { flexbox, transition, respondTo } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  height: calc(100vh - 30px);

  ${flexbox()}

  ${respondTo.smallScreen`
    height: 100vh;
  `}
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
  background-color: ${({ theme }) => theme.color.blue}22;
`

export const StyledButton = styled.span`
  left: 50%;
  bottom: 70px;
  width: 135px;
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  margin-left: -63px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 9px;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.color.cream};
  padding-top: ${({ theme }) => theme.padding.small / 2}px;
  border-top: 1px solid ${({ theme }) => theme.color.cream}55;
  border-bottom: 1px solid ${({ theme }) => theme.color.cream}55;

  ${transition('all 300ms linear')}
  ${respondTo.mobileScreen`
    width: 120px;
    font-size: 10px;
    margin-left: -55px;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.color.cream}17;
  }
`
