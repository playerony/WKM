import styled from 'styled-components'

import Button from 'antd/lib/button'

export const StyledButton = styled(Button)`
  &&& {
    height: auto;
    float: right;
    border-radius: 0;
    color: ${({ theme }) => theme.color.cream};
    padding: ${({ theme }) => `${theme.padding.small}px ${theme.padding.big}px`};

    &:hover {
      color: ${({ theme }) => theme.color.blue};
      border-color: ${({ theme }) => theme.color.blue};
    }
  }
`
