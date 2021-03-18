import styled, { css } from 'styled-components'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { transform } from '@styles/mixin'

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
    position: absolute;
    color: ${({ theme }) => theme.color.cream};
    left: ${({ theme }) => theme.padding.big}px;
    font-size: ${({ theme }) => theme.padding.big}px;

    ${transform(`translateY(-50%)`)}

    ${({ theme, isDisabled }) =>
      isDisabled &&
      css`
        color: ${theme.color.gray};
      `}
  }
`

export const StyledRightArrow = styled(RightOutlined)<ArrowProps>`
  &&& {
    top: 50%;
    z-index: 5;
    position: absolute;
    color: ${({ theme }) => theme.color.cream};
    right: ${({ theme }) => theme.padding.big}px;
    font-size: ${({ theme }) => theme.padding.big}px;

    ${transform(`translateY(-50%)`)}

    ${({ theme, isDisabled }) =>
      isDisabled &&
      css`
        color: ${theme.color.gray};
      `}
  }
`
