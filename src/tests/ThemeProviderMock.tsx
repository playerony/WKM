import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import variables from '@styles/variables'

interface ThemeProviderMockProps {
  children: ReactNode
}

const ThemeProviderMock = ({
  children
}: ThemeProviderMockProps): JSX.Element => (
  <ThemeProvider theme={variables}>{children}</ThemeProvider>
)

export default ThemeProviderMock
