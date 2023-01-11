const isIsomorphic = function(s, t) {
  let mem = {}
  for (let i = 0; i < s.length; i++) {
    if (mem[s[i]] === undefined) {
      mem[s[i]] = t[i]
    } else {
      if (mem[s[i]] !== t[i]) {
        return false
      }
    }
  }
  mem = {}
  for (let i = 0; i < s.length; i++) {
    if (mem[t[i]] === undefined) {
      mem[t[i]] = s[i]
    } else {
      if (mem[t[i]] !== s[i]) {
        return false
      }
    }
  }

  return true
};

console.log(isIsomorphic("badc","baba"))