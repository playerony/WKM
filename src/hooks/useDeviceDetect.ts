import { useState, useEffect } from 'react'

import variables from '@styles/variables'

export interface DeviceDetectData {
  isSmallScreen: boolean
  isLargeScreen: boolean
  isMobileScreen: boolean
  isMediumScreen: boolean
}

export const useDeviceDetect = (): DeviceDetectData => {
  const isClient = typeof window === 'object'

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  })

  const [windowSize, setWindowSize] = useState(getSize)
  const [deviceData, setDeviceData] = useState<DeviceDetectData>({
    isLargeScreen: false,
    isSmallScreen: false,
    isMediumScreen: false,
    isMobileScreen: false
  })

  useEffect(() => {
    if (!isClient) {
      return
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!windowSize.width) {
      return
    }

    if (windowSize.width <= variables.breakpoint.mobileScreen) {
      setDeviceData({
        isMobileScreen: true,
        isLargeScreen: false,
        isSmallScreen: false,
        isMediumScreen: false
      })
    } else if (
      windowSize.width >= variables.breakpoint.mobileScreen &&
      windowSize.width <= variables.breakpoint.smallScreen
    ) {
      setDeviceData({
        isSmallScreen: true,
        isLargeScreen: false,
        isMediumScreen: false,
        isMobileScreen: false
      })
    } else if (
      windowSize.width >= variables.breakpoint.smallScreen &&
      windowSize.width <= variables.breakpoint.mediumScreen
    ) {
      setDeviceData({
        isSmallScreen: false,
        isLargeScreen: false,
        isMediumScreen: true,
        isMobileScreen: false
      })
    } else {
      setDeviceData({
        isLargeScreen: true,
        isSmallScreen: false,
        isMediumScreen: false,
        isMobileScreen: false
      })
    }
  }, [windowSize.width])

  return deviceData
}
