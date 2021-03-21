import React, { useState } from 'react'

import ImageModal from '../ImageModal/ImageModal.component'

import {
  StyledWrapper,
  StyledGalleryImage,
  StyledGalleryElement
} from './GridGallery.styles'
import { GridGalleryProps } from './GridGallery.types'

const GridGallery = ({ gap = 15, elements }: GridGalleryProps): JSX.Element => {
  const [isImageModalVisible, setIsImageModalVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const onGalleryElementClick = (src: string) => () => {
    setSelectedImage(src)
    setIsImageModalVisible(true)
  }

  const onModalCancel = () => setIsImageModalVisible(false)

  return (
    <>
      <ImageModal
        src={selectedImage}
        onCancel={onModalCancel}
        visible={isImageModalVisible}
      />
      <StyledWrapper gap={gap}>
        {React.Children.toArray(
          elements.map(({ src, ...restProps }) => (
            <StyledGalleryElement onClick={onGalleryElementClick(src)} {...restProps}>
              <StyledGalleryImage src={src} />
            </StyledGalleryElement>
          ))
        )}
      </StyledWrapper>
    </>
  )
}

export default React.memo(GridGallery)
