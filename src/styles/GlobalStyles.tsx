import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    color: ${({ theme }) => theme.color.gray};
    font-family: ${({ theme }) => theme.font.normal};
    background-color: ${({ theme }) => theme.color.cream};
  }
`

export default GlobalStyles
