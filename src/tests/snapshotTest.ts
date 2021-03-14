const snapshotTest = (element: any) => {
  describe(`snapshot test`, () => {
    it(`should match`, () => {
      expect(element).toMatchSnapshot()
    })
  })
}

export default snapshotTest
