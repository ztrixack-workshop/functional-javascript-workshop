module.exports = curryN = (fn, n) => {
  n = n || fn.length
  return (arg) => {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}
