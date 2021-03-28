import React, { useRef, useEffect, useState } from 'react'

import RombGallery from '@components/common/RombGallery/RombGallery.component'

import { StyledVideo, StyledWrapper, StyledVideoMask } from './Gallery.styles'

import galleryImage1 from '@public/gallery/gallery_1.jpg'
import galleryImage2 from '@public/gallery/gallery_2.jpg'
import galleryImage3 from '@public/gallery/gallery_3.jpg'
import galleryImage4 from '@public/gallery/gallery_4.jpg'
import galleryImage5 from '@public/gallery/gallery_5.jpg'
import galleryImage7 from '@public/gallery/gallery_7.jpg'
import galleryImage9 from '@public/gallery/gallery_9.jpg'
import galleryImage11 from '@public/gallery/gallery_11.jpg'
import galleryImage12 from '@public/gallery/gallery_12.jpg'
import galleryImage14 from '@public/gallery/gallery_14.jpg'
import galleryImage15 from '@public/gallery/gallery_15.jpg'
import galleryImage18 from '@public/gallery/gallery_18.jpg'
import backgroundVideo from '@public/video/gallery_page_video.mp4'

const galleryImages: string[] = [
  galleryImage1,
  galleryImage9,
  galleryImage3,
  galleryImage7,
  galleryImage5,
  galleryImage4,
  galleryImage2,
  galleryImage18,
  galleryImage11,
  galleryImage12,
  galleryImage14,
  galleryImage15
]

const Gallery = (): JSX.Element => {
  const galleryRef = useRef<HTMLDivElement>()
  const [imageHeight, setImageHeight] = useState(1)

  useEffect(() => {
    function handleResize() {
      if (galleryRef.current) {
        const imageElements = Array.from(galleryRef.current.getElementsByTagName('img'))

        const height = imageElements.reduce(
          (result, value) => (value.clientHeight > result ? value.clientHeight : result),
          imageElements[0].clientHeight
        )

        setImageHeight(height)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <StyledWrapper ref={galleryRef as any} style={{ height: `calc(100vh - ${imageHeight / 2}px)` }}>
      <StyledVideo loop={true} muted={true} autoPlay={true} src={backgroundVideo} />
      <StyledVideoMask />
      <RombGallery images={galleryImages} />
    </StyledWrapper>
  )
}

export default Gallery
