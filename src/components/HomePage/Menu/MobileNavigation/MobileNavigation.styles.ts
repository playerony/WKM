import styled, { css } from 'styled-components'

import { transform, transition, flexbox, justifyContent, alignItems, flexDirection, respondTo } from '@styles/mixin'

interface StyledWrapperProps {
  height: number | string
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  left: 0;
  bottom: 0;
  z-index: 20;
  width: 100vw;
  overflow: hidden;
  position: absolute;
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
    color: ${({ theme }) => theme.color.cream}22;
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
