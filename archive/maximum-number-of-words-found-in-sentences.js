const mostWordsFound = function(sentences) {
  let ans = 0

  sentences.forEach(sentence => {
    let n = sentence.split(' ').length

    if (ans < n) {ans = n}
  })

  return ans
};