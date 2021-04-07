import React, { useEffect, useState } from 'react'

import { StyledWrapper, StyledLabel, StyledLabelsWrapper } from './MobileNavigation.styles'
import { MobileNavigationProps } from './MobileNavigation.types'

const navigationItems = ['Strona główna', 'Historia', 'Pomysł', 'Rozwój', 'Galeria', 'Kontakt']

const MobileNavigation = ({ visible, onClose, activePage, changeSlide }: MobileNavigationProps): JSX.Element => {
  const height = visible ? '100vh' : 0
  const [hoveredIndex, setHoveredIndex] = useState<number>(activePage)

  useEffect(() => {
    if (!visible) {
      setHoveredIndex(activePage)
    }
  }, [activePage])

  return (
    <StyledWrapper height={height} onClick={onClose}>
      <StyledLabelsWrapper>
        {React.Children.toArray(
          navigationItems.map((navigationItem: string, index: number) => (
            <StyledLabel selected={index === hoveredIndex} onClick={() => changeSlide(index)}>
              {navigationItem}
            </StyledLabel>
          ))
        )}
      </StyledLabelsWrapper>
    </StyledWrapper>
  )
}

export default MobileNavigation
