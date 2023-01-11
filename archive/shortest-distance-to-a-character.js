const shortestToChar = function(s, c) {
  s = s.split('')
  let mem = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      mem[i] = 0
    } else {
      let r = 0
      let find = false
      while (!find) {
        if (i + r < s.length) {
          if (s[i+r] === c) {find = true}
        }
        if (i - r >= 0) {
          if (s[i-r] === c) {find = true}
        }
        r++
      }
      mem[i] = r - 1
    }
  }

  return mem
}

console.log(shortestToChar("loveleetcode", "e"))