import {
  flexbox,
  flexWrap,
  animation,
  boxShadow,
  transform,
  respondTo,
  appearance,
  transition,
  alignItems,
  borderRadius,
  transformStyle,
  justifyContent,
  flexDirection,
  linearGradient,
  transformOrigin
} from '../mixin'

import snapshotTest from '@tests/snapshotTest'
import functionImportTest from '@tests/functionImportTest'

describe('mixin Functions', () => {
  describe('linearGradient Function', () => {
    functionImportTest(linearGradient)
    snapshotTest(linearGradient('180deg'))
    snapshotTest(linearGradient('180deg', 'rgba(0, 0, 0, 0) 44%'))
  })

  describe('transition Function', () => {
    functionImportTest(transition)
    snapshotTest(transition('all 500ms linear'))
  })

  describe('animation Function', () => {
    functionImportTest(animation)
    snapshotTest(animation('box1 500ms linear infinite'))
  })

  describe('transform Function', () => {
    functionImportTest(transform)
    snapshotTest(transform('translate(0, 100%)'))
  })

  describe('transformOrigin Function', () => {
    functionImportTest(transformOrigin)
    snapshotTest(transformOrigin('50% 50%'))
  })

  describe('borderRadius Function', () => {
    functionImportTest(borderRadius)
    snapshotTest(borderRadius('50px'))
  })

  describe('transformStyle Function', () => {
    functionImportTest(transformStyle)
    snapshotTest(transformStyle('50px'))
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

  describe('boxShadow Function', () => {
    functionImportTest(boxShadow)
    snapshotTest(boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)'))
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
