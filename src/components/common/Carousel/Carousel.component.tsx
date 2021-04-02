import React from 'react'
import AntdCarousel from 'antd/lib/carousel'

import { CarouselProps } from './Carousel.types'

const Carousel = ({ setPage, children, carouselRef, ...restProps }: CarouselProps): JSX.Element => (
  <AntdCarousel ref={carouselRef as any} afterChange={setPage} draggable={true} infinite={false} {...restProps}>
    {children}
  </AntdCarousel>
)

export default React.memo(Carousel)
