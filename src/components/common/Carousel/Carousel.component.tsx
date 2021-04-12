import React, { useState } from 'react'
import AntdCarousel from 'antd/lib/carousel'

import { StyledPaging } from './Carousel.styles'
import { CarouselProps } from './Carousel.types'

const Carousel = ({ setPage, children, carouselRef, ...restProps }: CarouselProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0)

  const afterChange = (page: number) => {
    setCurrentPage(page)

    setPage && setPage(page)
  }

  return (
    <AntdCarousel
      infinite={false}
      draggable={true}
      ref={carouselRef}
      afterChange={afterChange}
      customPaging={(currentSlide) => <StyledPaging selected={currentPage === currentSlide} />}
      {...restProps}
    >
      {children}
    </AntdCarousel>
  )
}

export default React.memo(Carousel)
