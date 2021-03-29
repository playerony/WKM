import React from 'react'
import AntdCarousel from 'antd/lib/carousel'

import { StyledWrapper } from './Carousel.styles'
import { CarouselProps } from './Carousel.types'

const Carousel = ({ setPage, children, carouselRef, ...restProps }: CarouselProps): JSX.Element => (
  <StyledWrapper>
    <AntdCarousel ref={carouselRef as any} afterChange={setPage} draggable={true} infinite={false} {...restProps}>
      {children}
    </AntdCarousel>
  </StyledWrapper>
)

export default Carousel
