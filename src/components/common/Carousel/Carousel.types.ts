import { ReactNode } from 'react'
import { CarouselProps as AntdCarouselProps } from 'antd/lib/carousel'

export interface CarouselProps extends AntdCarouselProps {
  carouselRef?: any
  children: ReactNode[] | ReactNode

  setPage?: (page: number) => void
}
