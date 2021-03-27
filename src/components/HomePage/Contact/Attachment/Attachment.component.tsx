import React from 'react'

import {
  StyledLabel,
  StyledWrapper,
  StyledDownloadIcon
} from './Attachment.style'
import { AttachmentProps } from './Attachment.type'

const Attachment = ({ children }: AttachmentProps): JSX.Element => (
  <StyledWrapper>
    <StyledDownloadIcon />
    <StyledLabel>
      {children}
    </StyledLabel>
  </StyledWrapper>
)

export default Attachment
