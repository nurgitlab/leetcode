const isPrefixOfWord = function (sentence, searchWord) {
  sentence = sentence.split(' ')
  let ans = -1
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length < searchWord.length) {continue} else {
      let mem = ''
      for (let j = 0; j < searchWord.length; j++) {
        mem+=sentence[i][j]
      }

      if (mem === searchWord) {
        ans = i + 1
        break
      }
    }
  }
  return ans
};

console.log(isPrefixOfWord("this problem is an easy problem", "pro"))