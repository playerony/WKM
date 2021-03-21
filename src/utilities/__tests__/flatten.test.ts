import flatten from '../flatten'

import functionImportTest from '@tests/functionImportTest'

describe('flatten Function', () => {
  functionImportTest(flatten)

  it('should return empty array when provided parameter is a falsy value or empty array', () => {
    expect(flatten([])).toEqual([])
    expect(flatten('' as any)).toEqual([])
    expect(flatten(null as any)).toEqual([])
    expect(flatten(undefined as any)).toEqual([])
  })

  it('should flatten nested arrays in the array', () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5])
  })
})
