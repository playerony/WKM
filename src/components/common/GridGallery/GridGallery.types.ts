interface GalleryElement {
  src: string
  rowEnd: number
  rowStart: number
  columnEnd: number
  columnStart: number
}

export interface GridGalleryProps {
  gap?: number
  elements: GalleryElement[]
}
