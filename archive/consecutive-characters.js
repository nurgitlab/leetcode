const maxPower = function(s) {
  let max = 1
  let m = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      m++
    } else {
      m = 1
    }

    max = Math.max(max, m)
  }

  return max
}

console.log(maxPower("leetcode"))