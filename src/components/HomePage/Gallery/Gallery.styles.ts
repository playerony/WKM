import styled from 'styled-components'

import { flexbox, justifyContent, respondTo } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100vw;
  position: relative;
  height: calc(100vh - 30px);
  background-color: ${({ theme }) => theme.color.black};
  padding: ${({ theme }) => `0 ${theme.padding.big * 2}px`};

  ${flexbox()}
  ${justifyContent('center')}

  ${({ theme }) => respondTo.mediumScreen`
    padding: ${`0 ${theme.padding.medium * 2}px`};
  `}

  ${respondTo.mobileScreen`
    padding: 0 10px;
  `}
`

export const StyledVideo = styled.video`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`

export const StyledVideoMask = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: ${({ theme }) => theme.color.blue}22;
`
