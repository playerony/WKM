import { Variable } from '../src/styles/variables'

declare module 'styled-components' {
  interface DefaultTheme extends Variable {}
}
