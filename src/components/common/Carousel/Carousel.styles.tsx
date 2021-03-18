import styled, { css } from 'styled-components'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { transform, transition } from '@styles/mixin'

export const StyledWrapper = styled.div`
  position: relative;
`

interface ArrowProps {
  isDisabled: boolean
}

export const StyledLeftArrow = styled(LeftOutlined)<ArrowProps>`
  &&& {
    top: 50%;
    z-index: 5;
    opacity: 0.7;
    position: absolute;
    color: ${({ theme }) => theme.color.cream};
    left: ${({ theme }) => theme.padding.big}px;
    font-size: ${({ theme }) => theme.padding.big}px;

    ${transform(`translateY(-50%)`)}
    ${transition('color 300ms linear')}

    ${({ theme, isDisabled }) =>
      isDisabled &&
      css`
        cursor: default;
        color: ${theme.color.gray};
      `}
  }
`

export const StyledRightArrow = styled(RightOutlined)<ArrowProps>`
  &&& {
    top: 50%;
    opacity: 0.7;
    z-index: 5;
    position: absolute;
    color: ${({ theme }) => theme.color.cream};
    right: ${({ theme }) => theme.padding.big}px;
    font-size: ${({ theme }) => theme.padding.big}px;

    ${transform(`translateY(-50%)`)}
    ${transition('color 500ms linear')}

    ${({ theme, isDisabled }) =>
      isDisabled &&
      css`
        cursor: default;
        color: ${theme.color.gray};
      `}
  }
`
