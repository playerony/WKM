import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import variables from '../styles/variables'
import ResetStyles from '../styles/ResetStyles'
import GlobalStyles from '../styles/GlobalStyles'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps): JSX.Element => (
  <ThemeProvider theme={variables}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default AppProvider
