/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
  let stack = []
  let ans = []

  for (let i = 0; i < s.length; i++) {
    if (['A', 'B', 'C', 'D'].includes(s[i])) {
      stack.push(s[i])
      let [s1, s2] = [stack[stack.length - 2] || '', stack[stack.length - 1] || '']
      if (s1 + s2 === 'AB' || s1 + s2 === 'CD') {
        stack.pop()
        stack.pop()
      }
    } else {
      ans = [...ans, ...stack]
      stack = [s[i]]
    }
  }

  ans = [...ans, ...stack]
  return ans.length
};