import styled, { css } from 'styled-components'

import Input from 'antd/lib/input'
import Typography from 'antd/lib/typography'

import { transition, respondTo } from '@styles/mixin'

const { TextArea } = Input
const { Title } = Typography

export const StyledWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
  position: relative;

  ${respondTo.mobileScreen`
    margin-top: 10px;
  `}
`

interface StyledTextAreaProps {
  isTextAreaFocus: boolean
}

export const StyledTextArea = styled(TextArea)<StyledTextAreaProps>`
  &&& {
    border: 0;
    outline: 0;
    resize: none;
    outline: none;
    height: 200px;
    border-radius: 0;
    box-shadow: none;
    transition: 0.4s all ease;
    background-color: rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.color.cream};
    font-family: ${({ theme }) => theme.font.normal};
    padding: ${({ theme }) => theme.padding.small}px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.cream};

    ${transition('all 300ms')}

    ${({ isTextAreaFocus }) =>
      isTextAreaFocus &&
      css`
        border-bottom-color: ${({ theme }) => theme.color.gray};
      `}

    ${({ theme }) => respondTo.mobileScreen`
      height: 125px;
      padding: ${theme.padding.small / 2}px 0;
    `}
  }
`

interface StyledLabelProps {
  isTextAreaFocus: boolean
}

export const StyledLabel = styled(Title)<StyledLabelProps>`
  &&& {
    top: 15px;
    margin: 0;
    padding: 0;
    font-weight: 100;
    position: absolute;
    pointer-events: none;
    color: ${({ theme }) => theme.color.cream};
    font-family: ${({ theme }) => theme.font.normal};

    ${transition('all 300ms')}

    ${respondTo.mobileScreen`
      font-size: 16px;
    `}

    ${({ isTextAreaFocus }) =>
      isTextAreaFocus &&
      css`
        top: -15px;
        font-size: 16px;
        color: ${({ theme }) => theme.color.gray};

        ${respondTo.mobileScreen`
          font-size: 12px;
        `}
      `}
  }
`
