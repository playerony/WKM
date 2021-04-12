import styled from 'styled-components'
import Typography from 'antd/lib/typography'

import { flexbox, respondTo, alignItems, flexDirection, justifyContent } from '@styles/mixin'

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

export const StyledFullWidthDivider = styled.div`
  width: 100%;
  text-align: center;
  border-top: 1px dashed ${({ theme }) => theme.color.cream}33;
  border-bottom: 1px dashed ${({ theme }) => theme.color.cream}33;
`

export const StyledText = styled(Title)`
  &&& {
    margin: 0;
    font-size: 34px;
    font-weight: 200;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.cream};
    padding-top: ${({ theme }) => theme.padding.small / 2}px;
    padding-bottom: ${({ theme }) => theme.padding.small / 2}px;

    ${respondTo.smallScreen`
      font-size: 30px;
    `}

    ${respondTo.mobileScreen`
      font-size: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
    `}
  }
`
