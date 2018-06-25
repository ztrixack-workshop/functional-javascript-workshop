module.exports = function arrayMap(arr, fn, arg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(arg, item, index, arr))
    return acc
  }, [])
}
