const numOfStrings = function(patterns, word) {
  let ans = 0
  patterns.forEach(el => {
    if (word.length !== word.split(el).join('').length) {
      ans++
    }
  })

  return ans
}

console.log(numOfStrings(["a","abc","bc","d"], "abc"))