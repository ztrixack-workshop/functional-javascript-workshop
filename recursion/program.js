module.exports = function getDependencies({ dependencies = [] }, result = []) {
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(dependencies[dep], result)
  })
  return result.sort()
}
