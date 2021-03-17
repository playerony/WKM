import styled, { css } from 'styled-components'

import { flexbox, animation, alignItems, justifyContent } from '@styles/mixin'

export const StyledWrapper = styled.div<{ isLoading: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.color.black};

  ${flexbox()}
  ${alignItems('center')}
  ${justifyContent('center')}

  ${({ isLoading }) =>
    !isLoading &&
    css`
      ${animation('disable-loader .5s linear')}
      animation-delay: .5s;
      -webkit-animation-fill-mode: forwards;
    `}

  @keyframes disable-loader {
    0% {
      opacity: 1;
      display: block;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
`

export const StyledLoaderFragment = styled.div`
  height: 64px;
  width: 64px;
  margin: 8px;
  display: block;
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  border: 8px solid ${({ theme }) => theme.color.cream};
  animation: loader-rotation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.color.cream} transparent transparent
    transparent;

  @keyframes loader-rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const StyledLoader = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: inline-block;

  & > ${StyledLoaderFragment}:nth-child(1) {
    animation-delay: -0.45s;
  }

  & > ${StyledLoaderFragment}:nth-child(2) {
    animation-delay: -0.3s;
  }

  & > ${StyledLoaderFragment}:nth-child(3) {
    animation-delay: -0.15s;
  }
`
