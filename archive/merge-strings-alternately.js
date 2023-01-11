var mergeAlternately = function (word1, word2) {
  let i = 0
  let j = 0
  let ans = ''
  while (i < word1.length && j < word2.length) {
    ans+=word1[i] + word2[j]
    i++
    j++
  }
  ans+= word1.slice(i) + word2.slice(j)

  return ans
};

console.log(mergeAlternately("abcd", "pq"))