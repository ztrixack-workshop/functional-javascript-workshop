module.exports = (messages) => 
  messages.filter(m => m.message.length < 50).map(m => m.message)
