/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let [l1, l2, ans] = [0, 0, '']

  while (l1 < s.length && l2 < t.length) {
    if (s[l1] === t[l2]) {
      l1++
      l2++
    } else {
      l1++
    }
  }



  return t.slice(l2).length
};