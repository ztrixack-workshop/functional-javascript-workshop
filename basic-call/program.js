const slice = Array.prototype.slice
const property = Object.prototype.hasOwnProperty

module.exports = () => slice.call(arguments)
  .filter((obj) => property.call(obj, 'quack'))
  .length
