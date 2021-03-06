import React, { useEffect, useState } from 'react'

import { MobileNavigationProps } from './MobileNavigation.types'
import { StyledWrapper, StyledCredits, StyledLabel, StyledLabelsWrapper } from './MobileNavigation.styles'

const navigationItems = ['Strona główna', 'Historia', 'Pomysł', 'Rozwój', 'Galeria', 'Kontakt']

const MobileNavigation = ({ visible, onClose, activePage, changeSlide }: MobileNavigationProps): JSX.Element => {
  const height = visible ? '100%' : 0
  const [hoveredIndex, setHoveredIndex] = useState<number>(activePage)

  useEffect(() => {
    if (!visible) {
      setHoveredIndex(activePage)
    }
  }, [activePage])

  const currentYear = new Date().getUTCFullYear()

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
      <StyledCredits>{currentYear} PAWEŁ WOJTASIŃSKI</StyledCredits>
    </StyledWrapper>
  )
}

export default MobileNavigation
