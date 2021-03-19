import React from 'react'
import AntdCarousel from 'antd/lib/carousel'

import {
  StyledWrapper,
  StyledLeftArrow,
  StyledRightArrow
} from './Carousel.styles'
import { CarouselProps } from './Carousel.types'

import flatten from '@utilities/flatten'

const Carousel = ({
  setPage,
  children,
  currentPage,
  carouselRef
}: CarouselProps): JSX.Element => {
  const getChildrenCount = (): number => flatten(children).length

  const nextSlide = (): void =>
    currentPage + 1 < getChildrenCount() && carouselRef.current.next()

  const prevSlide = (): void => currentPage > 0 && carouselRef.current.prev()

  return (
    <StyledWrapper>
      <StyledLeftArrow onClick={prevSlide} isDisabled={currentPage === 0} />
      <AntdCarousel ref={carouselRef as any} afterChange={setPage}>
        {children}
      </AntdCarousel>
      <StyledRightArrow
        onClick={nextSlide}
        isDisabled={currentPage === getChildrenCount() - 1}
      />
    </StyledWrapper>
  )
}

export default Carousel
