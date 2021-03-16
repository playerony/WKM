import styled from 'styled-components'

import { flexbox, alignItems, justifyContent, flexDirection } from '@styles/mixin'

export const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('center')}
`

export const StyledText = styled.span`
  font-size: 31px;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.cream};
  padding-top: ${({ theme }) => theme.padding.small / 2}px;
  padding-bottom: ${({ theme }) => theme.padding.small / 2}px;
`
