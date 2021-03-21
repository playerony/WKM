import styled from 'styled-components'

import Modal from 'antd/lib/modal'

import { respondTo } from '@styles/mixin'

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    margin: 0;
    padding: 0;
  }

  .ant-modal-close-x {
    font-size: 20px;

    ${respondTo.mobileScreen`
      font-size: 16px;
    `}
  }

  .anticon-close {
    color: ${({ theme }) => theme.color.cream};
  }
`

export const StyledImage = styled.img`
  display: block;
  max-width: 100%;
`
