import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    color: ${({ theme }) => theme.color.gray};
    font-family: ${({ theme }) => theme.font.normal};
    background-color: ${({ theme }) => theme.color.black};
  }

  input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #AAABBB inset !important;
}
`

export default GlobalStyles
