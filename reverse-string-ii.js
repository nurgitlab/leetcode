/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
  let isRev = true
  let ans = ''
  for (let i = 0; i < s.length; i+=k) {
    let h = ''
    for (let j = i; j < Math.min(i + k, s.length); j++) {
      h+=s[j]
    }
    console.log(h, isRev)
    if (isRev) {
      h = h.split('').reverse().join('')
    }

    ans+=h

    isRev=!isRev
  }

  return ans
};