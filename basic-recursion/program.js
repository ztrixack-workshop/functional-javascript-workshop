module.exports = (arr, fn, initial) => {
  const reduceOne = (index, value) => {
    if (index === arr.length) return value
    return reduceOne(index + 1, fn(value, arr[index], index, arr))
  }

  return reduceOne(0, initial)
}
