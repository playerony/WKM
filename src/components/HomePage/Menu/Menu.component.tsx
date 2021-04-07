import React, { useState } from 'react'

import Navigation from './Navigation/Navigation.component'
import MobileNavigation from './MobileNavigation/MobileNavigation.component'

import { useDeviceDetect } from '@hooks/useDeviceDetect'

import { MenuProps } from './Menu.types'
import { StyledLabel, StyledWrapper } from './Menu.styles'

const Menu = ({ children, activePage, changeSlide }: MenuProps): JSX.Element => {
  const [navigationVisible, setNavigationVisible] = useState<boolean>(false)

  const deviceData = useDeviceDetect()

  const onOpen = () => setNavigationVisible(true)

  const onClose = () => setNavigationVisible(false)

  const NavigationComponent = deviceData.isSmallScreen || deviceData.isMobileScreen ? MobileNavigation : Navigation

  return (
    <StyledWrapper>
      {children}
      <StyledLabel onClick={onOpen} />
      <NavigationComponent visible={navigationVisible} onClose={onClose} changeSlide={changeSlide} activePage={activePage} />
    </StyledWrapper>
  )
}

export default Menu
