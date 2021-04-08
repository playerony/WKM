import React from 'react'

import { AttachmentProps } from './Attachment.types'
import { StyledLabel, StyledWrapper, StyledDownloadIcon } from './Attachment.styles'

const Attachment = ({ children, toDownload }: AttachmentProps): JSX.Element => (
  <StyledWrapper href={toDownload} download={children}>
    <StyledDownloadIcon />
    <StyledLabel>{children}</StyledLabel>
  </StyledWrapper>
)

export default Attachment
