import React from 'react'
import renderer from 'react-test-renderer'

import GlobalStyles from '../GlobalStyles'

import snapshotTest from '@tests/snapshotTest'
import ThemeProviderMock from '@tests/ThemeProviderMock'

describe('ResetStyles Component', () => {
  renderer.create(<ThemeProviderMock><GlobalStyles /></ThemeProviderMock>)

  snapshotTest(document.head)
})
