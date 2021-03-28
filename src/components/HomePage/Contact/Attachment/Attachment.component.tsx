import React from 'react'

import { StyledLabel, StyledWrapper, StyledDownloadIcon } from './Attachment.style'
import { AttachmentProps } from './Attachment.type'

const Attachment = ({ children, toDownload }: AttachmentProps): JSX.Element => (
  <StyledWrapper href={toDownload} download={children}>
    <StyledDownloadIcon />
    <StyledLabel>{children}</StyledLabel>
  </StyledWrapper>
)

export default Attachment
