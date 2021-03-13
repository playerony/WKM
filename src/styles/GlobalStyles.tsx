import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${({ theme }) =>
      `${theme.fontFamily.primary}, ${theme.fontFamily.secondary}, sans-serif`};
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.font};
  }
`

export default GlobalStyles
