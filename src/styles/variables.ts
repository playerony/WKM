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

export type Font = 'normal' | 'bold'

export type Color = 'red' | 'blue' | 'gray' | 'black' | 'cream' | 'white' | 'orange' | 'purple'

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
    red: '#E81F25',
    blue: '#1890ff',
    gray: '#AAAAAA',
    black: '#16161a',
    cream: '#FBF7F3',
    white: '#FFFFFF',
    orange: '#E4572E',
    purple: '#6B5B95'
  },
  font: {
    normal: `'Montserrat', sans-serif`,
    bold: "'HelveticaNeueBold', Helvetica, Arial, sans-serif"
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
