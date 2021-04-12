import styled from 'styled-components'

import { transition } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

export const StyledLabel = styled.div`
  width: 100%;
  height: 25px;
  font-size: 10px;
  cursor: pointer;
  line-height: 25px;
  text-align: center;
  position: relative;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.cream};
  background-color: ${({ theme }) => theme.color.black};

  &::before {
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.color.gray}55;

    ${transition('height 300ms')}
  }

  &::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 25px;
    z-index: 1px;
    font-size: 9px;
    content: 'MENU';
    font-weight: 600;
    position: absolute;
    letter-spacing: 2px;
    font-family: ${({ theme }) => theme.font.normal};
  }

  &:hover {
    &::before {
      height: 25px;
    }
  }
`
