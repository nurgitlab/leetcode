/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
  let ans = ''
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      let cantUse = new Set()
      if (s[i - 1] !== undefined) {
        cantUse.add(s[i - 1])
      }

      if (s[i + 1] !== undefined) {
        cantUse.add(s[i + 1])
      }

      if (!cantUse.has('a')) {
        ans+='a'
        s[i] = 'a'
        continue
      }

      if (!cantUse.has('b')) {
        ans+='b'
        s[i] = 'b'
        continue
      }

      if (!cantUse.has('c')) {
        ans+='c'
        s[i] = 'c'
        continue
      }
    } else {
      ans+=s[i]
    }
  }

  return ans
};