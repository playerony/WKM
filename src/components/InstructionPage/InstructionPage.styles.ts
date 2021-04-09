import styled from 'styled-components'

import Typography from 'antd/lib/typography'

import { flexbox, transform, alignItems, justifyContent, flexDirection, respondTo } from '@styles/mixin'

const { Text, Title } = Typography

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

export const StyledLogo = styled(Title)`
  &&& {
    margin: 0;
    padding: 0;
    width: 350px;
    height: 350px;
    display: block;
    font-size: 50px;
    font-weight: 300;
    position: relative;
    text-align: center;
    line-height: 350px;
    letter-spacing: 8px;
    border-radius: 100%;
    color: ${({ theme }) => theme.color.cream}AA;
    font-family: ${({ theme }) => theme.font.normal};
    border: 1px dotted ${({ theme }) => theme.color.gray}55;

    ${respondTo.mediumScreen`
      width: 300px;
      height: 300px;
      font-size: 40px;
      line-height: 300px;
    `}

    ${respondTo.smallScreen`
      width: 275px;
      height: 275px;
      font-size: 36px;
      line-height: 275px;
    `}

    ${respondTo.mobileScreen`
      width: 170px;
      height: 170px;
      font-size: 24px;
      line-height: 170px;
    `}
  }
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
    width: 180px;
    height: 53px;
  `}
`

export const StyledLabel = styled(Text)`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.gray};
  font-family: ${({ theme }) => theme.font.normal};
  padding-top: ${({ theme }) => theme.padding.small}px;

  ${({ theme }) => respondTo.mobileScreen`
    font-size: 9px;
    padding-top: ${theme.padding.small / 2}px;
  `}
`
