import styled, { css } from 'styled-components'

import { flexbox, transition, justifyContent } from '@styles/mixin'

export const StyledWrapper = styled.div`
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100vw;
  position: absolute;

  ${flexbox()}
  ${justifyContent('center')}

  & > div:first-child {
    border-left: 1px solid ${({ theme }) => theme.color.cream};
  }
`

interface StyledItemProps {
  active: boolean
  selected: boolean
}

export const StyledItem = styled.div<StyledItemProps>`
  width: 30px;
  height: 50px;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.color.cream};

  ${transition('all 300ms')}

  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: 1px solid ${({ theme }) => theme.color.cream};
    `}

  ${({ active }) =>
    active &&
    css`
      border-top: 1px dotted ${({ theme }) => theme.color.cream};
    `}
`
