import React, { useRef, useEffect, useState } from 'react'

import RombGallery from '@components/common/RombGallery/RombGallery.component'

import { StyledVideo, StyledWrapper, StyledVideoMask } from './Gallery.styles'

const galleryImages: string[] = [
  '/static/gallery/gallery_1.jpg',
  '/static/gallery/gallery_9.jpg',
  '/static/gallery/gallery_3.jpg',
  '/static/gallery/gallery_7.jpg',
  '/static/gallery/gallery_5.jpg',
  '/static/gallery/gallery_4.jpg',
  '/static/gallery/gallery_2.jpg',
  '/static/gallery/gallery_18.jpg',
  '/static/gallery/gallery_11.jpg',
  '/static/gallery/gallery_12.jpg',
  '/static/gallery/gallery_14.jpg',
  '/static/gallery/gallery_15.jpg'
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
      <StyledVideo loop={true} muted={true} autoPlay={true} src="/static/video/gallery_page_video.mp4" />
      <StyledVideoMask />
      <RombGallery images={galleryImages} />
    </StyledWrapper>
  )
}

export default Gallery
