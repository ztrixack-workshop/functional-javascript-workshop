module.exports = (userIds, load, done) => 
  done(userIds.map(userId => load(userId)))
