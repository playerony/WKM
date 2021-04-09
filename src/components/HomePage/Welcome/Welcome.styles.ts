import styled from 'styled-components'

import { flexbox, transition, respondTo } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  height: calc(100vh - 30px);

  ${flexbox()}
`

export const StyledVideo = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

export const StyledButton = styled.span`
  left: 50%;
  bottom: 70px;
  width: 135px;
  font-size: 12px;
  cursor: pointer;
  padding-top: 9px;
  position: absolute;
  margin-left: -63px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 9px;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.color.cream};
  border-top: 1px solid ${({ theme }) => theme.color.cream}55;
  border-bottom: 1px solid ${({ theme }) => theme.color.cream}55;

  ${transition('all 300ms linear')}

  &:hover {
    background-color: ${({ theme }) => theme.color.cream}17;
  }

  ${respondTo.mobileScreen`
    bottom: 50px;
    width: 110px;
    font-size: 9px;
    margin-left: -50px;
  `}
`
