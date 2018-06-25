module.exports = inputWords => 
  inputWords.reduce((total, word) => 
    Object.assign(total, { [word]: (total[word] + 1) || 1 }), {})
