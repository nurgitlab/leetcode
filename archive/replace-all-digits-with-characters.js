const replaceDigits = function (s) {
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (isLetter(s[i])) {
      ans += s[i]
      let n = s[i + 1]
      if (!isLetter(s[i + 2]) && s[i + 2] !== undefined) {
        n += s[i + 2]
      }
      if (s[i+1] === undefined) {break}
      ans += String.fromCharCode(Number(n) + s[i].charCodeAt(0))
    }
  }

  return ans
}

function isLetter(l) {
  if (l === undefined) {
    return false
  }
  let ind = l.charCodeAt(0) - 97
  if (ind >= 0 && ind <= 26) {
    return true
  }

  return false
}

console.log(replaceDigits("a1b2c3d4e"))