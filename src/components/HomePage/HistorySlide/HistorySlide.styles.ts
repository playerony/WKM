import styled from 'styled-components'

import Divider from 'antd/lib/divider'
import Typography from 'antd/lib/typography'

import { flexbox, transform, respondTo } from '@styles/mixin'

const { Text, Title } = Typography

export const StyledWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: calc(100vh - 30px);

  ${flexbox()}
`

export const StyledVideo = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

export const StyledContentWrapper = styled.section`
  top: 70%;
  left: 20%;
  display: block;
  position absolute;

  ${transform(`translateY(-50%)`)}

  ${respondTo.smallScreen`
    top: 50%;
    left: 50%;
    width: 70%;

    ${transform(`translateX(-50%) translateY(-50%)`)}
  `}

  ${respondTo.mobileScreen`
    width: 80%;
  `}
`

export const StyledTitle = styled(Title)`
  &&& {
    color: ${({ theme }) => theme.color.cream};
    font-family: ${({ theme }) => theme.font.normal};

    ${respondTo.smallScreen`
      font-size: 40px;
      text-align: center;
      text-transform: uppercase;
    `}

    ${respondTo.mobileScreen`
      font-size: 30px;
    `}
  }
`

export const StyledDivider = styled(Divider)`
  &&& {
    border-top-color: ${({ theme }) => theme.color.cream};

    ${respondTo.smallScreen`
      display: none;
    `}
  }
`

export const StyledDescription = styled(Text)`
  &&& {
    margin: 0 auto;
    display: block;
    line-height: 2;
    max-width: 500px;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.color.cream};
    font-family: ${({ theme }) => theme.font.normal};

    ${respondTo.smallScreen`
      font-size: 18px;
      line-height: 1.7;
      text-align: center;
    `}

    ${respondTo.mobileScreen`
      margin: 0 auto;
      font-size: 12px;
      line-height: 1.6;
      letter-spacing: 2.5px;
    `}
  }
`
