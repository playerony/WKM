import styled from 'styled-components'

import Typography from 'antd/lib/typography'

import { flexbox, alignItems, justifyContent, flexDirection } from '@styles/mixin'

const { Text } = Typography

export const StyledWrapper = styled.div<{ visible?: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  cursor: arrow;
  position: relative;
  background-color: ${({ theme }) => theme.color.black};

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('center')}
`

export const StyledLoader = styled.div`
  width: 226px;
  height: 68px;
  position: relative;
  display: inline-block;
  background-image: url(static/gifs/instruction.gif);
`

export const StyledLabel = styled(Text)`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gray};
  font-family: ${({ theme }) => theme.font.normal};
  padding-top: ${({ theme }) => theme.padding.small}px;
`
