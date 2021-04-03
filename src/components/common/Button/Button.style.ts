import styled from 'styled-components'

import Button from 'antd/lib/button'

import { transition, respondTo } from '@styles/mixin'

export const StyledButton = styled(Button)`
  &&& {
    height: auto;
    float: right;
    border-radius: 0;
    box-shadow: none;
    color: ${({ theme }) => theme.color.cream};
    padding: ${({ theme }) => `${theme.padding.small}px ${theme.padding.big}px`};

    ${transition('all 300ms')}

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.color.blue};
      border-color: ${({ theme }) => theme.color.blue};
    }

    &:disabled {
      background: ${({ theme }) => theme.color.cream}55;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.color.cream};
        border-color: ${({ theme }) => theme.color.cream};
      }
    }

    ${({ theme }) => respondTo.mobileScreen`
      float: unset;
      display: block;
      margin: 0 auto;
      margin-top: 10px !important;
      padding: ${`${theme.padding.small / 2}px ${theme.padding.medium}px`};
    `}
  }
`
