import styled from 'styled-components'

import Typography from 'antd/lib/typography'
import { FileWordFilled } from '@ant-design/icons'

import { transform, transition, respondTo } from '@styles/mixin'

const { Title } = Typography

export const StyledDownloadIcon = styled(FileWordFilled)`
  &&& {
    display: block;
    font-size: 100px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.cream};
    padding-bottom: ${({ theme }) => theme.padding.small}px;

    ${transition('all 300ms')}

    ${respondTo.mediumScreen`
      font-size: 90px;
    `}

    ${respondTo.smallScreen`
      font-size: 80px;
    `}

    ${({ theme }) => respondTo.mobileScreen`
      font-size: 50px;
      padding-bottom: ${theme.padding.small / 2}px;
    `}
  }
`

export const StyledLabel = styled(Title)`
  &&& {
    margin: 0;
    padding: 0;
    font-weight: 300;
    text-align: center;
    color: ${({ theme }) => theme.color.cream};

    ${transition('all 300ms')}

    ${respondTo.mediumScreen`
      font-size: 36px;
    `}

    ${respondTo.smallScreen`
      font-size: 32px;
    `}

    ${respondTo.mobileScreen`
      font-size: 18px;
    `}
  }
`

export const StyledWrapper = styled.a`
  cursor: pointer;
  position: relative;

  ${transform('scale(1)')}
  ${transition('all 300ms')}

  &:hover {
    ${transform('scale(1.1)')}
  }

  &:focus {
    outline: 0;
  }
`
