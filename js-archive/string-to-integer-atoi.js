var myAtoi = function (s) {
  s = s.trimStart().split('')

  let ans = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '+') {
      if (i === 0) {
        continue
      } else {
        break
      }
    }
    if (s[i] === '-' && i > 0) {
      break
    }
    if (s[i] !== '-' && (isNaN(parseInt(s[i])))) {
      break
    }
    if (!isNaN(parseInt(s[i]))) {
      if (i > 0) {
        if (s[i - 1] === '-') {
          ans.push(`-`)
          ans.push(s[i])
        } else {
          ans.push(s[i])
        }
      } else {
        ans.push(s[i])
      }
    }
  }

  if (ans.length > 0) {
    let el = parseInt(ans.join(''))
    if (el > 2147483647) {
      return 2147483647
    } else if (el < -2147483648) {
      return -2147483648
    } else {
      return el
    }
  } else {
    return 0
  }
};

console.log(myAtoi("-42"))