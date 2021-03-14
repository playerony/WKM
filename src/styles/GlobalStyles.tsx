import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${({ theme }) => theme.font.normal};
    background-color: ${({ theme }) => theme.color.gray500};
  }
`

export default GlobalStyles
