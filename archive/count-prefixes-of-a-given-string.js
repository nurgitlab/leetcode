const countPrefixes = function (words, s) {
  let ans = 0
  words.forEach(word => {
    if (word.length <= s.length) {
      let mem = ''
      for (let i = 0; i < word.length; i++) {
        mem += s[i]
      }

      if (word === mem) {
        ans++
      }
    }
  })

  return ans
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"))