const DEFAULT_MESSAGE = 'Niepoprawna wartość'

const regExpValidator = (regexp: RegExp, message: string = DEFAULT_MESSAGE) => ({
  validator(_: any, value: string) {
    if (!regexp.test(value)) {
      return Promise.resolve()
    }

    return Promise.reject(message)
  }
})

export default regExpValidator
