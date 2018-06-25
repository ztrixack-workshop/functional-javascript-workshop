module.exports = function(userIds, load, done) {
  done(userIds.map(userId => load(userId)))
}
