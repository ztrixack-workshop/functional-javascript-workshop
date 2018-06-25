var slice = Array.prototype.slice

module.exports = (namespace) => 
  () => console.log.apply(console, [namespace].concat(slice.call(arguments)))

