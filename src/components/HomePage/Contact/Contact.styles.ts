import styled from 'styled-components'

import { flexbox, alignItems, respondTo, flexDirection, justifyContent } from '@styles/mixin'

export const StyledWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: calc(100vh - 25px);

  ${({ theme }) => respondTo.mobileScreen`
    .ant-form-item-explain-error {
      font-size: 10px;
      font-family: ${theme.font.normal};
    }
  `}
`

export const StyledVideo = styled.video`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

export const StyledContentWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  height: 100vh;
  overflow: hidden;
  position: absolute;

  ${flexbox()}

  ${respondTo.mobileScreen`
    ${flexDirection('column')}
  `}
`

export const StyledDownloadSectionWrapper = styled.section`
  flex: 1;
  z-index: 20;
  padding: ${({ theme }) => theme.padding.big * 2}px;

  ${flexbox()}
  ${alignItems('center')}
  ${flexDirection('column')}
  ${justifyContent('space-around')}

  ${({ theme }) => respondTo.mediumScreen`
    padding: ${theme.padding.big}px;
  `}

  ${({ theme }) => respondTo.smallScreen`
    padding: ${theme.padding.medium}px;
    padding-right: 0;
  `}

  ${respondTo.mobileScreen`
    display: none;
  `}
`

export const StyledContactSectionWrapper = styled.section`
  flex: 1;
  z-index: 20;
  padding: ${({ theme }) => theme.padding.big * 2}px;

  ${flexbox()}
  ${alignItems('center')}

  ${({ theme }) => respondTo.mediumScreen`
    padding: ${theme.padding.big}px;
  `}

  ${({ theme }) => respondTo.smallScreen`
    flex: 2;
    padding: ${theme.padding.medium}px;
  `}

  ${({ theme }) => respondTo.mobileScreen`
    padding: ${theme.padding.small}px;
    padding-top: 0;
  `}
`
