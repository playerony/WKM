import snapshotTest from '@utilities/tests/snapshotTest'
import functionImportTest from '@utilities/tests/functionImportTest'

import { flexbox, flexWrap, transform, respondTo, appearance, transition, alignItems, flexDirection, justifyContent } from '../mixin'

describe('mixin Functions', () => {
  describe('transition Function', () => {
    functionImportTest(transition)
    snapshotTest(transition('all 500ms linear'))
  })

  describe('transform Function', () => {
    functionImportTest(transform)
    snapshotTest(transform('translate(0, 100%)'))
  })

  describe('flexbox Function', () => {
    functionImportTest(flexbox)
    snapshotTest(flexbox())
  })

  describe('alignItems Function', () => {
    functionImportTest(alignItems)
    snapshotTest(alignItems('center'))
  })

  describe('justifyContent Function', () => {
    functionImportTest(justifyContent)
    snapshotTest(justifyContent('center'))
  })

  describe('flexDirection Function', () => {
    functionImportTest(flexDirection)
    snapshotTest(flexDirection('row'))
  })

  describe('flexWrap Function', () => {
    functionImportTest(flexWrap)
    snapshotTest(flexWrap('wrap'))
  })

  describe('appearance Function', () => {
    functionImportTest(appearance)
    snapshotTest(appearance('none'))
  })

  describe('respondTo Function', () => {
    functionImportTest(appearance)
    snapshotTest(respondTo.smallScreen`background-color: red`)
    snapshotTest(respondTo.largeScreen`background-color: red`)
    snapshotTest(respondTo.mediumScreen`background-color: red`)
    snapshotTest(respondTo.mobileScreen`background-color: red`)
  })
})
