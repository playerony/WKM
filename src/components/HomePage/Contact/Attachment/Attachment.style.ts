import styled from 'styled-components'

import Typography from 'antd/lib/typography'
import { FileWordFilled } from '@ant-design/icons'

const { Title } = Typography

export const StyledWrapper = styled.div`
  cursor: pointer;
  position: relative;
`

export const StyledDownloadIcon = styled(FileWordFilled)`
  &&& {
    display: block;
    font-size: 100px;
    font-weight: 300;
    color: ${({ theme }) => theme.color.cream};
    padding-bottom: ${({ theme }) => theme.padding.small}px;
  }
`

export const StyledLabel = styled(Title)`
  &&& {
    margin: 0;
    padding: 0;
    font-weight: 300;
    text-align: center;
    color: ${({ theme }) => theme.color.cream};
  }
`
