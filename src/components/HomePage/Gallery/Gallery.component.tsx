import React from 'react'

import GridGallery from '@components/common/GridGallery/GridGallery.component'

import { useDeviceDetect } from '@hooks/useDeviceDetect'

import { StyledWrapper } from './Gallery.styles'
import galleryImage1 from '@public/gallery/gallery_1.jpg'
import galleryImage2 from '@public/gallery/gallery_2.jpg'
import galleryImage3 from '@public/gallery/gallery_3.jpg'
import galleryImage4 from '@public/gallery/gallery_4.jpg'
import galleryImage5 from '@public/gallery/gallery_5.jpg'
import galleryImage7 from '@public/gallery/gallery_7.jpg'
import galleryImage9 from '@public/gallery/gallery_9.jpg'

const mobileScreenGalleryElements = [
  {
    rowEnd: 2,
    rowStart: 1,
    columnEnd: 5,
    columnStart: 1,
    src: galleryImage3
  },
  {
    rowEnd: 3,
    rowStart: 1,
    columnEnd: 9,
    columnStart: 5,
    src: galleryImage9
  },
  {
    rowEnd: 4,
    rowStart: 2,
    columnEnd: 5,
    columnStart: 1,
    src: galleryImage1
  },
  {
    rowEnd: 5,
    rowStart: 3,
    columnEnd: 9,
    columnStart: 5,
    src: galleryImage4
  },
  {
    rowEnd: 6,
    rowStart: 4,
    columnEnd: 5,
    columnStart: 1,
    src: galleryImage7
  },
  {
    rowEnd: 9,
    rowStart: 6,
    columnEnd: 5,
    columnStart: 1,
    src: galleryImage5
  },
  {
    rowEnd: 9,
    rowStart: 5,
    columnEnd: 9,
    columnStart: 5,
    src: galleryImage2
  }
]

const largeScreenGalleryElements = [
  {
    rowEnd: 3,
    rowStart: 1,
    columnEnd: 3,
    columnStart: 1,
    src: galleryImage1
  },
  {
    rowEnd: 3,
    rowStart: 1,
    columnEnd: 5,
    columnStart: 3,
    src: galleryImage9
  },
  {
    rowEnd: 5,
    rowStart: 3,
    columnEnd: 5,
    columnStart: 1,
    src: galleryImage3
  },
  {
    rowEnd: 5,
    rowStart: 1,
    columnEnd: 9,
    columnStart: 5,
    src: galleryImage7
  },
  {
    rowEnd: 9,
    rowStart: 5,
    columnEnd: 4,
    columnStart: 1,
    src: galleryImage5
  },
  {
    rowEnd: 9,
    rowStart: 5,
    columnEnd: 6,
    columnStart: 4,
    src: galleryImage4
  },
  {
    rowEnd: 9,
    rowStart: 5,
    columnEnd: 9,
    columnStart: 6,
    src: galleryImage2
  }
]

const Gallery = (): JSX.Element => {
  const { isMobileScreen, isSmallScreen } = useDeviceDetect()

  const galleryElements =
    isMobileScreen || isSmallScreen
      ? mobileScreenGalleryElements
      : largeScreenGalleryElements

  return (
    <StyledWrapper>
      <GridGallery elements={galleryElements} gap={isMobileScreen ? 5 : 10} />
    </StyledWrapper>
  )
}

export default Gallery
