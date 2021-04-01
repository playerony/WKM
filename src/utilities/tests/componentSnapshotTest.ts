import { ReactWrapper, ShallowWrapper } from 'enzyme'

const componentSnapshotTest = (wrapper: ReactWrapper | ShallowWrapper) => {
  describe(`snapshot test`, () => {
    it(`should match`, () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
}

export default componentSnapshotTest
