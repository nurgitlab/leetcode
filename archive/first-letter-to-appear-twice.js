const repeatedCharacter = function(s) {
  let mem = {}
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (mem[s[i]] === undefined) {
      mem[s[i]] = true
    } else {
      ans = s[i]
      break
    }
  }

  return ans
};
