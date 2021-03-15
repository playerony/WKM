const getRandomInt = (min: number, max: number): number | null => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return null
  }

  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default getRandomInt
