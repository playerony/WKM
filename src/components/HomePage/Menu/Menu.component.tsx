import React, { useState } from 'react'

import Navigation from './Navigation/Navigation.component'

import { MenuProps } from './Menu.types'
import { StyledLabel, StyledWrapper } from './Menu.styles'

const Menu = ({ children, activePage, changeSlide }: MenuProps): JSX.Element => {
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false)

  const onOpen = () => setNavigationVisible(true)

  const onClose = () => setNavigationVisible(false)

  return (
    <StyledWrapper>
      {children}
      <StyledLabel onClick={onOpen} />
      <Navigation visible={navigationVisible} onClose={onClose} changeSlide={changeSlide} activePage={activePage} />
    </StyledWrapper>
  )
}

export default Menu
