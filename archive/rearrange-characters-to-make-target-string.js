const rearrangeCharacters = function(s, target) {
  const lettersStore = {}
  s.split('').forEach(letter => {
    if (lettersStore[letter] === undefined) {lettersStore[letter] = 1} else {
      lettersStore[letter]++
    }
  })

  const targetLettersStore = {}

  target.split('').forEach(letter => {
    if (targetLettersStore[letter] === undefined) {
      targetLettersStore[letter] = 0
    }
    targetLettersStore[letter]++
  })

  let countOfWords = Infinity

  Object.keys(targetLettersStore).forEach(letter => {
    if (lettersStore[letter] === undefined) {
      countOfWords = 0
    } else {
      countOfWords = Math.min(countOfWords, Math.floor(lettersStore[letter] / targetLettersStore[letter]))
    }
  })

  return countOfWords
}

console.log(rearrangeCharacters("ilovecodingonleetcode", "code"))