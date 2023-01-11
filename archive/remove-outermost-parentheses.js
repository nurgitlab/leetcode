const removeOuterParentheses = function (s) {
  let opened = 0
  let ans = ''
  s.split('').forEach(el => {
    if (el === '(') {
      if (opened > 0) {
        ans += el
      }
      opened++
    } else {
      opened--
      if (opened > 0) {
        ans += el
      }
    }
  })

  return ans
}

console.log(removeOuterParentheses("(()())(())"))