import styled, { css } from 'styled-components'

import { transition, flexbox, transform, alignItems, justifyContent, respondTo } from '@styles/mixin'

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

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledFrontNavigationContainer = styled.div`
  top: 50%;
  height: 100px;
  margin-top: 50px;
  position: absolute;
  width: max-content;

  ${transition('all 300ms')}
`

interface StyledFrontNavigationItemProps {
  selected: boolean
}

export const StyledFrontNavigationItem = styled.h1<StyledFrontNavigationItemProps>`
  &&& {
    margin: 0;
    padding: 0;
    float: left;
    width: 450px;
    height: 100px;
    cursor: pointer;
    font-size: 34px;
    font-weight: 300;
    letter-spacing: 9px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.gray}55;
    font-family: ${({ theme }) => theme.font.normal};

    ${flexbox()}
    ${alignItems('center')}
    ${transition('all 300ms')}
    ${justifyContent('center')}

    ${({ theme, selected }) =>
      selected &&
      css`
        color: ${theme.color.cream};
      `}

    ${respondTo.mobileScreen`
      width: 350px;
      font-size: 24px;
    `}
  }
`

export const StyledBackNavigationContainer = styled.div`
  position: absolute;
  transform-origin: bottom left;

  ${transition('all 300ms')}
  ${transform('rotateZ(45deg)')}

  & > div:first-child {
    border-top: 1px dashed ${({ theme }) => theme.color.gray}33;
  }
`

interface StyledBackNavigationItemProps {
  selected: boolean
}

export const StyledBackNavigationItem = styled.div<StyledBackNavigationItemProps>`
  margin: 10px;
  width: 130px;
  height: 130px;
  font-size: 30px;
  color: ${({ theme }) => theme.color.gray}55;
  background-color: ${({ theme }) => theme.color.gray}22;

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}

  & > span {
    ${transform('rotateZ(-45deg)')}
  }

  ${({ theme, selected }) =>
    selected &&
    css`
      color: ${theme.color.cream};
    `}
`
