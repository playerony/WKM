import styled from 'styled-components'

import { transition, respondTo } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

export const StyledLabel = styled.div`
  width: 100%;
  height: 30px;
  font-size: 10px;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.cream};

  &::before {
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    content: '';
    position: absolute;
    background-color: #2e3234;

    ${transition('height 300ms')}
  }

  &::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30px;
    z-index: 1px;
    content: 'MENU';
    position: absolute;
  }

  &:hover {
    &::before {
      height: 30px;
    }
  }

  ${respondTo.mobileScreen`
    height: 0;
    display: none;
    overflow: hidden;
    pointer-events: none;
  `}
`
