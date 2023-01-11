var truncateSentence = function(s, k) {
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (k === 0) {break}
    if (s[i] === ' ') {
      k--
      if (k === 0) {break}
      ans+=s[i]
    } else {
      ans+=s[i]
    }
  }

  return ans
};

console.log(truncateSentence("Hello how are you Contestant", 4))