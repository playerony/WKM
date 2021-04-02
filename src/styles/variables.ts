export interface Breakpoint {
  largeScreen: number
  mediumScreen: number
  smallScreen: number
  mobileScreen: number
}

export interface Padding {
  big: number
  small: number
  medium: number
}

export type Font = 'normal'

export type Color = 'blue' | 'gray' | 'black' | 'cream'

export interface Variable {
  baseFontSize: number
  color: {
    [key in Color]: string
  }
  font: {
    [key in Font]: string
  }
  padding: Padding
  breakpoint: Breakpoint
}

const variables: Variable = {
  baseFontSize: 16,
  color: {
    blue: '#1890ff',
    gray: '#AAAAAA',
    black: '#000000',
    cream: '#FBF7F3'
  },
  font: {
    normal: `'Montserrat', sans-serif`
  },
  breakpoint: {
    largeScreen: 1919,
    mediumScreen: 1367,
    smallScreen: 1023,
    mobileScreen: 750
  },
  padding: {
    small: 20,
    medium: 40,
    big: 60
  }
}

export default variables
