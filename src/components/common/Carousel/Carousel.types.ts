import { ReactNode } from 'react'

export interface CarouselProps {
  carouselRef: any
  currentPage: number
  children: ReactNode[]

  setPage: (page: number) => void
}
