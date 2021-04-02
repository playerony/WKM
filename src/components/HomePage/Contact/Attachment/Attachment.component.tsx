import React from 'react'

import { AttachmentProps } from './Attachment.type'
import { StyledLabel, StyledWrapper, StyledDownloadIcon } from './Attachment.style'

const Attachment = ({ children, toDownload }: AttachmentProps): JSX.Element => (
  <StyledWrapper href={toDownload} download={children}>
    <StyledDownloadIcon />
    <StyledLabel>{children}</StyledLabel>
  </StyledWrapper>
)

export default Attachment
