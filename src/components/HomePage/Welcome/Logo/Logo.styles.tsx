import styled from 'styled-components'
import Typography from 'antd/lib/typography'

import {
  flexbox,
  respondTo,
  alignItems,
  flexDirection,
  justifyContent
} from '@styles/mixin'

const { Title } = Typography

export const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('center')}
`

export const StyledText = styled(Title)`
  &&& {
    font-weight: 100;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.cream};
    margin-top: ${({ theme }) => theme.padding.small}px;
    margin-bottom: ${({ theme }) => theme.padding.small}px;

    ${respondTo.smallScreen`
      font-size: 30px;
    `}

    ${respondTo.mobileScreen`
      font-size: 18px;
      margin-top: 15px;
      margin-bottom: 15px;
    `}
  }
`
