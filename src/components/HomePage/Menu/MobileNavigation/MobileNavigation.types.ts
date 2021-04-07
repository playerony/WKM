export interface MobileNavigationProps {
  visible: boolean
  activePage: number

  onClose: () => void
  changeSlide: (index: number) => void
}
