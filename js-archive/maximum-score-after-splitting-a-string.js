const maxScore = function (s) {
  let score = 0
  for (let k = 1; k < s.length; k++) {
    let a = 0
    for (let i = 0; i < k; i++) {
      if (s[i] === '0') {
        a++
      }
    }

    let b = 0
    for (let i = k; i < s.length; i++) {
      if (s[i] === '1') {
        b++
      }
    }
    score = Math.max(score, a + b)
  }

  return score
}

console.log(maxScore('01'))