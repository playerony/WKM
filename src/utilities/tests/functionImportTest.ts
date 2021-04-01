const functionImportTest = (func: Function) => {
  describe(`import test`, () => {
    it(`should import ${func.name} function`, () => {
      expect(typeof func).toBe('function')
    })
  })
}

export default functionImportTest
