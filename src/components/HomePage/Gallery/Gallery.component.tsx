import React, { useRef, useEffect, useState } from 'react'

import RombGallery from '@components/common/RombGallery/RombGallery.component'

import { StyledVideo, StyledWrapper } from './Gallery.styles'

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

  const handleResize = (): void => {
    if (galleryRef.current) {
      const imageElements = Array.from(galleryRef.current.getElementsByTagName('img'))

      const height = imageElements.reduce(
        (result, value) => (value.clientHeight > result ? value.clientHeight : result),
        imageElements[0].clientHeight
      )

      setImageHeight(height)
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const onVideoPlay = () => window.dispatchEvent(new Event('resize'))

  return (
    <StyledWrapper ref={galleryRef as any} style={{ height: `calc(100vh - 30px - ${imageHeight / 2}px)` }}>
      <StyledVideo loop={true} muted={true} autoPlay={true} onPlay={onVideoPlay} src="/static/video/gallery_page_video.mp4" />
      <RombGallery images={galleryImages} />
    </StyledWrapper>
  )
}

export default Gallery
