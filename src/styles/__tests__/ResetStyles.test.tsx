import React from 'react'
import renderer from 'react-test-renderer'

import ResetStyles from '../ResetStyles'

import snapshotTest from '@tests/snapshotTest'

describe('ResetStyles Component', () => {
  renderer.create(<ResetStyles />)

  snapshotTest(document.head)
})
