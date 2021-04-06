import { ReactNode } from 'react'

export interface MenuProps {
  activePage: number
  children: ReactNode

  changeSlide: (index: number) => void
}
