const digitSum = function(s, k) {
  while (s.length > k) {
    let ns = ''
    for (let i = 0; i < s.length; i += k) {
      let m = 0
      for (let j = i; j <= Math.min(i + k - 1, s.length - 1); j++) {
        m+=Number(s[j])
      }
      ns+=m
    }

    s = ns
  }

  return s
}

console.log(digitSum("1234", 2))