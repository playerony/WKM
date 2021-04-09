export interface NavigatorProps {
  initialIndex: number

  onHover: (index: number) => void
  onClick: (index: number) => void
}
