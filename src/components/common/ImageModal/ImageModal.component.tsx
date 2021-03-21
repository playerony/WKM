import React from 'react'

import { StyledModal, StyledImage } from './ImageModal.styles'
import { ImageModalProps } from './ImageModal.types'

const ImageModal = ({ src, ...restProps }: ImageModalProps): JSX.Element => (
  <StyledModal width="90%" centered={true} footer={null} {...restProps}>
    <StyledImage src={src || ''} />
  </StyledModal>
)

export default ImageModal
