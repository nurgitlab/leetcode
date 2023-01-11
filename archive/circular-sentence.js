const isCircularSentence = function (sentence) {
  sentence = sentence.split(' ')

  for (let i = 0; i < sentence.length - 1; i++) {
    if (sentence[i][sentence[i].length - 1] !== sentence[i + 1][0]) {
      return false
    }
  }

  if (sentence[0][0]!== sentence[sentence.length - 1][sentence[sentence.length - 1].length - 1]) {
    return false
  }

  return true
}

console.log(isCircularSentence("Leetcode is cool"))