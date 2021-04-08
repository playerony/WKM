import styled from 'styled-components'

import Typography from 'antd/lib/typography'

import { flexbox, transform, alignItems, justifyContent, flexDirection, respondTo } from '@styles/mixin'

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

export const StyledLogo = styled.div`
  width: 275px;
  height: 275px;
  display: block;
  position: relative;
  object-position: center;
  background-size: contain;
  background-image: url(static/images/logo_white.png);

  ${respondTo.mobileScreen`
    width: 180px;
    height: 180px;
  `}
`

export const StyledInstructionWrapper = styled.div`
  left: 50%;
  bottom: 70px;
  position: absolute;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('center')}
  ${transform(`translateX(-50%)`)}

  ${respondTo.mobileScreen`
    bottom: 50px;
  `}
`

export const StyledLoader = styled.div`
  width: 226px;
  height: 68px;
  position: relative;
  display: inline-block;
  background-size: contain;
  background-image: url(static/gifs/instruction.gif);

  ${respondTo.mobileScreen`
    width: 200px;
    height: 60px;
  `}
`

export const StyledLabel = styled(Text)`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gray};
  font-family: ${({ theme }) => theme.font.normal};
  padding-top: ${({ theme }) => theme.padding.small}px;

  ${respondTo.mobileScreen`
    font-size: 10px;
  `}
`
