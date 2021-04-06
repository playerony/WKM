export interface NavigationProps {
  visible: boolean
  activePage: number

  onClose: () => void
  changeSlide: (index: number) => void
}
