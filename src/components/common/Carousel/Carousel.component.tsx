import React from 'react'
import AntdCarousel from 'antd/lib/carousel'

import {
  StyledWrapper,
  StyledLeftArrow,
  StyledRightArrow
} from './Carousel.styles'
import { CarouselProps } from './Carousel.types'

const Carousel = ({
  setPage,
  children,
  carouselRef
}: CarouselProps): JSX.Element => {
  const nextSlide = (): void => carouselRef.current.next()

  const prevSlide = (): void => carouselRef.current.prev()

  return (
    <StyledWrapper>
      <StyledLeftArrow onClick={prevSlide} />
      <AntdCarousel ref={carouselRef as any} afterChange={setPage}>
        {children}
      </AntdCarousel>
      <StyledRightArrow onClick={nextSlide} />
    </StyledWrapper>
  )
}

export default Carousel
