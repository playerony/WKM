const flatten = (array: any[]): any[] => {
  if (!array?.length) {
    return []
  }

  return array.reduce(
    (result, value) =>
      result.concat(Array.isArray(value) ? flatten(value) : value),
    []
  )
}

export default flatten
