import styled from 'styled-components'

interface StyledWrapperProps {
  gap: number
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  width: 100vw;
  display: grid;
  height: 100vh;
  grid-gap: ${({ gap }) => gap}px;
  grid-template-columns: repeat(8, 1fr);
`

interface StyledGalleryElementProps {
  rowEnd: number
  rowStart: number
  columnEnd: number
  columnStart: number
}

export const StyledGalleryElement = styled.figure<StyledGalleryElementProps>`
  grid-row-end: ${({ rowEnd }) => rowEnd};
  grid-row-start: ${({ rowStart }) => rowStart};
  grid-column-end: ${({ columnEnd }) => columnEnd};
  grid-column-start: ${({ columnStart }) => columnStart};
`

export const StyledGalleryImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
  object-fit: cover;
`
