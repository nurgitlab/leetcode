const countAsterisks = function (s) {
  s = s.split('|')
  let ans = 0

  for (let i = 0; i < s.length; i += 2) {
    for (let j = 0; j < s[i].length; j++) {
      if (s[i][j] === '*') {
        ans++
      }
    }
  }

  return ans
}

console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"))