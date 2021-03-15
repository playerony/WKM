import getRandomInt from '../getRandomInt'
import functionImportTest from '@tests/functionImportTest'

describe('getRandomInt Function', () => {
  functionImportTest(getRandomInt)

  it('should return null when one of the provided values is not a number', () => {
    expect(getRandomInt(null as any, 2)).toBeNull()
    expect(getRandomInt(null as any, null as any)).toBeNull()

    expect(getRandomInt({} as any, 3)).toBeNull()
    expect(getRandomInt({} as any, {} as any)).toBeNull()

    expect(getRandomInt('test' as any, 4)).toBeNull()
    expect(getRandomInt('test' as any, {} as any)).toBeNull()
  })

  it('should return random value for provided range', () => {
    const value = getRandomInt(1, 5) || 0

    expect([1, 2, 3, 4, 5].includes(value))
  })
})

export {}
