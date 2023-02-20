/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
  return printString(s) === printString(t)
}

function printString (str) {
  let ans = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      ans = ans.slice(0, -1)
    } else {
      ans+=str[i]
    }
  }
  console.log(ans)
  return ans
}