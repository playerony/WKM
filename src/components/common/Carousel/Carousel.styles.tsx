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
    left: ${({ theme }) => theme.padding.medium}px;
    font-size: ${({ theme }) => theme.padding.medium}px;

    ${transform(`translateY(-50%)`)}
    ${transition('color 300ms linear')}

    ${respondTo.mobileScreen`
      display: none;
    `}
  }
`

export const StyledRightArrow = styled(RightOutlined)`
  &&& {
    top: 50%;
    z-index: 5;
    opacity: 0.7;
    position: absolute;
    color: ${({ theme }) => theme.color.cream};
    right: ${({ theme }) => theme.padding.medium}px;
    font-size: ${({ theme }) => theme.padding.medium}px;

    ${transform(`translateY(-50%)`)}
    ${transition('color 300ms linear')}

    ${respondTo.mobileScreen`
      display: none;
    `}
  }
`
