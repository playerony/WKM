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

export interface Variable {
  baseFontSize: number
  color: {
    [key: string]: string
  }
  font: {
    normal: string
    bold: string
  }
  padding: Padding
  breakpoint: Breakpoint
}

const variables: Variable = {
  baseFontSize: 16,

  color: {
    purple200: '#dbe3f4',
    purple500: '#ccccff',
    purple700: '#6084fa',

    blue100: '#f8fbff',
    blue500: '#48adf1',
    blue700: '#0094ff',
    blue800: '#274f6f',

    red300: '#debae2',
    red500: '#ff516d',

    green200: '#ccffcf',
    green400: '#32f4cd',
    green500: '#48f1b4',
    green600: '#02d57c',

    gray300: '#eeeeee',
    gray400: '#666666',
    gray500: '#c9c9c9',
    gray600: '#979797',
    gray700: '#999999',
    gray900: '#26282b',

    white: '#ffffff',
    black: '#16161a'
  },
  font: {
    normal: "'HelveticaNeue', Helvetica, Arial, sans-serif",
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
