const arrayStringsAreEqual = function(word1, word2) {
  let w1 = word1.join('')
  let w2 = word2.join('')

  return w1 === w2
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))