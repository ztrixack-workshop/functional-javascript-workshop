module.exports = (target, method) => {
  let originalFunction = target[method]
  let result = { count: 0 }

  target[method] = () => {
    result.count++
    return originalFunction.apply(this, arguments)
  }

  return result
}
