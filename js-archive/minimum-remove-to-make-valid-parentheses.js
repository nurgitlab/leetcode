/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let stack = []
  let ans = Array(s.length).fill('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      if (stack.length > 0) {
        ans[stack.at(-1)] = '('
        ans[i] = ')'
        stack.pop()
      }
    } else {
      ans[i] = s[i]
    }
  }

  return ans.join('')
};