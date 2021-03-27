import React from 'react'
import renderer from 'react-test-renderer'

import ResetStyles from '../ResetStyles'

import snapshotTest from '@tests/snapshotTest'
import ThemeProviderMock from '@tests/ThemeProviderMock'

describe('GlobalStyles Component', () => {
  renderer.create(
    <ThemeProviderMock>
      <ResetStyles />
    </ThemeProviderMock>
  )

  snapshotTest(document.head)
})
