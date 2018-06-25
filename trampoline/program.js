const repeat = (operation, num) => 
  () => {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }


const trampoline = fn => {
  while(fn && typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = (operation, num) => 
  trampoline(() => repeat(operation, num))
