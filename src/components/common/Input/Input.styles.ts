import styled, { css } from 'styled-components'

import Input from 'antd/lib/input'
import Typography from 'antd/lib/typography'

import { transition, respondTo } from '@styles/mixin'

const { Title } = Typography

export const StyledWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
  position: relative;

  ${respondTo.mobileScreen`
    margin-top: 10px;
  `}
`

interface StyledInputProps {
  isInputFocus: boolean
}

export const StyledInput = styled(Input)<StyledInputProps>`
  &&& {
    border: 0;
    outline: 0;
    outline: none;
    border-radius: 0;
    box-shadow: none;
    transition: 0.3s all;
    background-color: transparent;
    color: ${({ theme }) => theme.color.cream};
    font-family: ${({ theme }) => theme.font.normal};
    padding: ${({ theme }) => theme.padding.small}px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.cream};

    ${transition('all 300ms')}

    ${({ isInputFocus }) =>
      isInputFocus &&
      css`
        border-bottom-color: ${({ theme }) => theme.color.gray};
      `}

    ${({ theme }) => respondTo.mobileScreen`
      padding: ${theme.padding.small / 2}px 0;
    `}
  }
`

interface StyledLabelProps {
  isInputFocus: boolean
}

export const StyledLabel = styled(Title)<StyledLabelProps>`
  &&& {
    margin: 0;
    top: 15px;
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

    ${({ isInputFocus }) =>
      isInputFocus &&
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
