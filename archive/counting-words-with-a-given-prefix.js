const prefixCount = function(words, pref) {
  let ans = 0

  words.forEach(word => {
    if (word.length >= pref.length) {
      word = word.split('')
      let mem = ''
      for (let i = 0; i < pref.length; i++) {
        mem += word[i]
      }

      if (mem === pref) {ans++}
    }
  })

  return ans
};

console.log(prefixCount(["pay","attention","practice","attend"], "at"))