import React from 'react'

import { RombGalleryProps } from './RombGallery.types'
import { StyledWrapper, StyledGalleryImage } from './RombGallery.styles'

const RombGallery = ({ images }: RombGalleryProps): JSX.Element => (
  <StyledWrapper>{React.Children.toArray(images.map((image) => <StyledGalleryImage src={image} />))}</StyledWrapper>
)

export default React.memo(RombGallery)
