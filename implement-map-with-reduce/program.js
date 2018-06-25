module.exports = (arr, fn, arg) => 
  arr.reduce((acc, item, index, arr) => {
    acc.push(fn.call(arg, item, index, arr))
    return acc
  }, [])

