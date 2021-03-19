const flatten = (array: any[]): any[] => {
  return array.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    )
  }, [])
}

export default flatten
