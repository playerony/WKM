import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    cursor: url(static/images/drag.png), auto;
    color: ${({ theme }) => theme.color.gray};
    font-family: ${({ theme }) => theme.font.normal};
    background-color: ${({ theme }) => theme.color.black};
  }
`

export default GlobalStyles
