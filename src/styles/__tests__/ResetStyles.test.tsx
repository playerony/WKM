import React from 'react'
import renderer from 'react-test-renderer'

import ResetStyles from '../ResetStyles'

import snapshotTest from '@utilities/tests/snapshotTest'
import ThemeProviderMock from '@utilities/tests/ThemeProviderMock'

describe('GlobalStyles Component', () => {
  renderer.create(
    <ThemeProviderMock>
      <ResetStyles />
    </ThemeProviderMock>
  )

  snapshotTest(document.head)
})
