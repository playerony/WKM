import { ReactNode } from 'react'

export interface CarouselProps {
  carouselRef: any
  children: ReactNode[]

  setPage: (page: number) => void
}
