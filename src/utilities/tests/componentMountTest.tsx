import React from 'react'
import { mount } from 'enzyme'

const componentMountTest = (Component: React.ComponentType) => {
  describe(`component mount and unmount`, () => {
    it(`component could be updated and unmounted without errors`, () => {
      const wrapper = mount(<Component />)

      expect(() => {
        wrapper.setProps({})
        wrapper.unmount()
      }).not.toThrow()
    })
  })
}

export default componentMountTest
