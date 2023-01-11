const reversePrefix = function(word, ch) {
  let ind = -1
  for (let i = 0; i < word.length; i++) {
    if (word[i]===ch) {
      ind = i
      break
    }
  }

  if (ind === -1) {
    return word
  }

  let revWord = ''
  for (let i = 0; i <= ind; i++) {
    revWord+=word[i]
  }

  word = word.slice(ind + 1)

  return (revWord.split('').reverse().join('') + word)
};

console.log(reversePrefix('abcdefd', 'd'))