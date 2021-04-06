export interface NavigatorProps {
  hoveredIndex: number
  initialIndex: number

  onHover: (index: number) => void
  onClick: (index: number) => void
}
