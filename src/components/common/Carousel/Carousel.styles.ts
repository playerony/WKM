import styled, { css } from 'styled-components'

import { transition } from '@styles/mixin'

interface StyledPagingProps {
  selected: boolean
}

export const StyledPaging = styled.div<StyledPagingProps>`
  &&& {
    width: 30px;
    height: 1px;
    background-color: transparent;
    border-left: 1px solid ${({ theme }) => theme.color.cream};

    ${transition('all 300ms')}

    ${({ selected }) =>
      selected &&
      css`
        background-color: ${({ theme }) => theme.color.cream};
      `}
  }
`
