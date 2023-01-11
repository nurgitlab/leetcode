const detectCapitalUse = function(word) {
  if (word === word.toLowerCase() || word === word.toUpperCase()) {
    return true
  } else {
    let s = ''
    for (let i = 1; i < word.length; i++) {
      s+=word[i]
    }

    if (s !== s.toLowerCase()) {
      return false
    } else {
      if (word[0] === word[0].toUpperCase()) {
        return true
      }
    }
  }

  return false
}