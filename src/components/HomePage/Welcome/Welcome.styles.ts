import styled from 'styled-components'

import { flexbox, transition, respondTo } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  height: calc(100vh - 25px);

  ${flexbox()}
`

export const StyledVideo = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

export const StyledButton = styled.span`
  left: 50%;
  bottom: 50px;
  width: 120px;
  font-size: 10px;
  cursor: pointer;
  padding-top: 9px;
  font-weight: 600;
  position: absolute;
  margin-left: -50px;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 9px;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.color.cream};
  font-family: ${({ theme }) => theme.font.normal};
  border-top: 1px solid ${({ theme }) => theme.color.cream}44;
  border-bottom: 1px solid ${({ theme }) => theme.color.cream}44;

  ${transition('all 300ms')}

  &:hover {
    background-color: ${({ theme }) => theme.color.cream}10;
  }

  ${respondTo.mobileScreen`
    bottom: 40px;
    width: 110px;
    font-size: 9px;
    margin-left: -50px;
  `}
`
