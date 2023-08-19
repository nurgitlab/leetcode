var countValidWords = function(sentence) {
  return sentence.split(' ').map(el => el.trim()).reduce((sum, word) => {
    if (isValid(word)) {
      return sum + 1
    }
    return sum
  }, 0)
};

function isValid(word) {
  for (let i = 0; i < word.length; i++) {
    if (/^[0-9]$/.test(word[i])) {
      return false
    }
  }
}