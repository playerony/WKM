import styled, { css } from 'styled-components'

import { transform, transition, userSelect, flexbox, justifyContent, alignItems, flexDirection, respondTo } from '@styles/mixin'

interface StyledWrapperProps {
  height: number | string
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  left: 0;
  bottom: 0;
  z-index: 20;
  width: 100vw;
  position: fixed;
  overflow: hidden;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.color.black};

  ${transition('height 300ms')}
`

export const StyledLabelsWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('center')}
`

interface StyledLabelProps {
  selected: boolean
}

export const StyledLabel = styled.h1<StyledLabelProps>`
  &&& {
    padding: 0;
    font-size: 38px;
    cursor: pointer;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.cream}33;
    font-family: ${({ theme }) => theme.font.normal};
    margin: ${({ theme }) => theme.padding.small}px 0;

    ${transform('scale(1)')}
    ${transition('all 300ms')}

    ${({ selected }) =>
      selected &&
      css`
        color: ${({ theme }) => theme.color.cream}88;
      `}

    &:hover {
      ${transform('scale(1.1)')}
    }

    ${({ theme }) => respondTo.mobileScreen`
      font-size: 24px;
      margin: ${theme.padding.small / 2}px 0;
    `}
  }
`

export const StyledCredits = styled.span`
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 8px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  position: absolute;
  letter-spacing: 3px;
  cursor: url(static/images/close.png), auto;
  color: ${({ theme }) => theme.color.gray}55;
  font-family: ${({ theme }) => theme.font.normal};

  ${userSelect('none')}
`
