import { ReactWrapper } from 'enzyme'

const wrapperMountTest = (wrapper: ReactWrapper) => {
  describe(`wrapper mount and unmount`, () => {
    it(`wrapper could be updated and unmounted without errors`, () => {
      expect(() => {
        wrapper.setProps({})
        wrapper.unmount()
      }).not.toThrow()
    })
  })
}

export default wrapperMountTest
