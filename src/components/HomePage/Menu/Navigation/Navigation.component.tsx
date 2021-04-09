import React, { useState, useEffect } from 'react'

import Navigator from './Navigator/Navigator.component'

import {
  StyledWrapper,
  StyledBackNavigationItem,
  StyledFrontNavigationItem,
  StyledBackNavigationContainer,
  StyledFrontNavigationContainer
} from './Navigation.styles'
import { NavigationProps } from './Navigation.types'

const frontNavigationItems = ['Strona główna', 'Historia', 'Pomysł', 'Rozwój', 'Galeria', 'Kontakt']

const BOX_SIZE = 140
const FRONT_ITEM_WIDTH = 450
const BOX_DIAGONAL_LENGTH = BOX_SIZE * Math.sqrt(2)
const HALF_OF_BOX_DIAGONAL_LENGTH = BOX_DIAGONAL_LENGTH / 2

const Navigation = ({ visible, onClose, activePage, changeSlide }: NavigationProps): JSX.Element => {
  const height = visible ? '100%' : 0
  const [hoveredIndex, setHoveredIndex] = useState<number>(activePage)

  useEffect(() => {
    if (!visible) {
      setHoveredIndex(activePage)
    }
  }, [activePage])

  return (
    <StyledWrapper height={height} onClick={onClose}>
      <StyledBackNavigationContainer
        style={{
          top: `calc(-50% + 100px + ${hoveredIndex * HALF_OF_BOX_DIAGONAL_LENGTH}px)`,
          left: `calc(50% + ${FRONT_ITEM_WIDTH / 2}px - ${HALF_OF_BOX_DIAGONAL_LENGTH}px - ${hoveredIndex * HALF_OF_BOX_DIAGONAL_LENGTH}px)`
        }}
      >
        <StyledBackNavigationItem selected={hoveredIndex === 5}>
          <span>06</span>
        </StyledBackNavigationItem>
        <StyledBackNavigationItem selected={hoveredIndex === 4}>
          <span>05</span>
        </StyledBackNavigationItem>
        <StyledBackNavigationItem selected={hoveredIndex === 3}>
          <span>04</span>
        </StyledBackNavigationItem>
        <StyledBackNavigationItem selected={hoveredIndex === 2}>
          <span>03</span>
        </StyledBackNavigationItem>
        <StyledBackNavigationItem selected={hoveredIndex === 1}>
          <span>02</span>
        </StyledBackNavigationItem>
        <StyledBackNavigationItem selected={hoveredIndex === 0}>
          <span>01</span>
        </StyledBackNavigationItem>
      </StyledBackNavigationContainer>
      <StyledFrontNavigationContainer style={{ left: `calc(50% - ${hoveredIndex * FRONT_ITEM_WIDTH}px)` }}>
        {React.Children.toArray(
          frontNavigationItems.map((frontNavigationItem: string, index: number) => (
            <StyledFrontNavigationItem style={{ width: FRONT_ITEM_WIDTH }} selected={index === hoveredIndex} onClick={() => changeSlide(index)}>
              {frontNavigationItem}
            </StyledFrontNavigationItem>
          ))
        )}
      </StyledFrontNavigationContainer>
      <Navigator initialIndex={activePage} onHover={setHoveredIndex} onClick={changeSlide} />
    </StyledWrapper>
  )
}

export default Navigation
