import styled, { css } from 'styled-components'

import Typography from 'antd/lib/typography'

import { flexbox, transform, userSelect, transition, justifyContent } from '@styles/mixin'

const { Title } = Typography

export const StyledWrapper = styled.div`
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100vw;
  z-index: 100;
  position: absolute;
  cursor: url(static/images/close.png), auto;
  background-color: ${({ theme }) => theme.color.black};
`

export const StyledLogo = styled(Title)`
  &&& {
    top: 0;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
    position: absolute;
    letter-spacing: 3px;
    left: calc(50% - 200px);
    color: ${({ theme }) => theme.color.cream};
    cursor: url(static/images/close.png), auto;
    font-family: ${({ theme }) => theme.font.normal};

    ${userSelect('none')}
    ${transform(`translateX(-50%)`)}
  }
`

export const StyledItemsWrapper = styled.div`
  ${flexbox()}
  ${justifyContent('center')}

  & > div:first-child {
    border-left: 1px solid ${({ theme }) => theme.color.cream};
  }
`

interface StyledItemProps {
  active: boolean
}

export const StyledItem = styled.div<StyledItemProps>`
  width: 30px;
  height: 50px;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.color.cream};

  ${transition('all 600ms')}

  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }

  ${({ active }) =>
    active &&
    css`
      border-top: 1px dotted ${({ theme }) => theme.color.cream};
    `}
`

export const StyledCredits = styled.span`
  top: 0;
  margin: 0;
  padding: 0;
  right: 15px;
  font-size: 12px;
  font-weight: 500;
  line-height: 50px;
  position: absolute;
  letter-spacing: 3px;
  cursor: url(static/images/close.png), auto;
  color: ${({ theme }) => theme.color.gray}55;
  font-family: ${({ theme }) => theme.font.normal};

  ${userSelect('none')}
`
