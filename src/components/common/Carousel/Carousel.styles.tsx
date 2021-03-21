import styled from 'styled-components'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { transform, transition, respondTo } from '@styles/mixin'

export const StyledWrapper = styled.div`
  position: relative;
`

export const StyledLeftArrow = styled(LeftOutlined)`
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

    ${({ theme }) => respondTo.smallScreen`
      font-size: 50px;
      left: ${theme.padding.medium}px;
    `}

    ${respondTo.mobileScreen`
      display: none;
    `}
  }
`

export const StyledRightArrow = styled(RightOutlined)`
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

    ${({ theme }) => respondTo.smallScreen`
      font-size: 50px;
      right: ${theme.padding.medium}px;
    `}

    ${respondTo.mobileScreen`
      display: none;
    `}
  }
`
