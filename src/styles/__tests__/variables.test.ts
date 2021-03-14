import variables from '../variables'

describe('variables file', () => {
  it('should match snapshot', () => {
    expect(variables).toMatchSnapshot()
  })
})
