import styled from 'styled-components'

import Divider from 'antd/lib/divider'
import Typography from 'antd/lib/typography'

import { flexbox, transform, respondTo } from '@styles/mixin'

const { Text, Title } = Typography

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  ${flexbox()}
`

export const StyledVideo = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

export const StyledVideoMask = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.color.blue}22;
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
    width: 50%;

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
      text-align: center;
    `}
  }
`

export const StyledDivider = styled(Divider)`
  &&& {
    border-top-color: ${({ theme }) => theme.color.cream};

    ${respondTo.mobileScreen`
      width: 70%;
    `}
  }
`

export const StyledDescription = styled(Text)`
  &&& {
    display: block;
    line-height: 2;
    max-width: 500px;
    letter-spacing: 3px;
    color: ${({ theme }) => theme.color.cream};
    font-family: ${({ theme }) => theme.font.normal};

    ${respondTo.smallScreen`
      text-align: center;
    `}

    ${respondTo.mobileScreen`
      margin: 0 auto;
      line-height: 1.7;
      letter-spacing: 2.5px;
    `}
  }
`
