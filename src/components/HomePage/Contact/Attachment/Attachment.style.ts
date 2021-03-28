import styled from 'styled-components'

import Typography from 'antd/lib/typography'
import { FileWordFilled } from '@ant-design/icons'

import { transition } from '@styles/mixin'

const { Title } = Typography

export const StyledDownloadIcon = styled(FileWordFilled)`
  &&& {
    display: block;
    font-size: 100px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.cream};
    padding-bottom: ${({ theme }) => theme.padding.small}px;

    ${transition('all 300ms')}
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
  }
`

export const StyledWrapper = styled.a`
  cursor: pointer;
  position: relative;

  &:hover {
    ${StyledDownloadIcon} {
      color: ${({ theme }) => theme.color.blue};
    }

    ${StyledLabel} {
      color: ${({ theme }) => theme.color.blue};
    }
  }
`
