/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  let s1 = Array(s.length).fill(0).map((_, i) => i % 2 === 0 ? 1 : 0).join('')
  let s2 = Array(s.length).fill(0).map((_, i) => i % 2 === 0 ? 0 : 1).join('')

  let [c1, c2] = [0, 0]

  for (let i = 0; i < s.length; i++) {
    if (s[i]!==s1[i]) {c1++}
    if (s[i]!==s2[i]) {c2++}
  }

  return Math.min(c1, c2)
};