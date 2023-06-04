/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
  let stack = [] // {counter: 3, str: ''}
  let ans = ''
  //9 - 57
  //0 - 48
  for (let i = 0; i < s.length; i++) {
    console.log(stack)

    if (s[i] === '[') {
      let [j, num] = [i - 1, '']

      while (isNum(s[j])) {
        num = s[j] + num
        j--
      }

      stack.push({
        counter: Number(num),
        str: ''
      })
    } else if (s[i] === ']') {
      let nst = stack.at(-1).str.repeat(stack.at(-1).counter)
      console.log(nst)
      if (stack.length === 1) {
        ans+=nst
      } else {
        stack.at(-2).str+=nst
      }

      stack.pop()
    } else if (!isNum(s[i])) {
      if (stack.length > 0) {
        stack.at(-1).str+=s[i]
      } else {
        ans+=s[i]
      }
    }
  }

  return ans
}

function isNum (l) {
  if (l === undefined) return false
  if (l.charCodeAt(0) >= 48 && l.charCodeAt(0) <= 57) {
    return true
  }

  return false
}