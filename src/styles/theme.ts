export type FontFamily = 'primary' | 'secondary'

export type Color = 'primary' | 'secondary' | 'background' | 'font' | 'white'

export interface Theme {
  fontFamily: { [key in FontFamily]: string }
  color: { [key in Color]: string }
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}

const theme: Theme = {
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Raleway'
  },
  color: {
    font: '#3F3F3F',
    white: '#FFFFFF',
    primary: '#000000',
    secondary: '#899BB6',
    background: '#F8F8FA'
  }
}

export default theme
