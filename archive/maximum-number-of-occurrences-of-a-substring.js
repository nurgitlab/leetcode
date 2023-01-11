const maxFreq = function(s, maxLetters, minSize, maxSize) {
  let storage = {}
  for (let i = minSize; i<= maxSize; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      let subString = ''
      for (let k = j; k < j + i; k++) {
        subString+=s[k]
      }

      const lettersSet = new Set(subString.split(''))
      if (lettersSet.size <= maxLetters) {
        if (storage[subString] === undefined) {
          storage[subString] = 1
        } else {
          storage[subString]++
        }
      }
    }
  }

  let maxWords = 0

  Object.keys(storage).forEach(word => {
    maxWords = Math.max(storage[word], maxWords)
  })

  return maxWords
}

console.log(maxFreq( "aababcaab",  2, 3,  4))