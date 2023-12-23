/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let a = words.map(el => el.length), ans = 0, m = words.map(el => new Set(el.split('')))

  for (let i = 0; i < m.length; i++) {
    for (j = i + 1; j < m.length; j++) {
      let k = [...m[j]]

      let isOk = k.reduce((s, el) => m[i].has(el) ? false : s, true)

      if (isOk) {ans = Math.max(ans, a[i] * a[j])}
    }
  }

  return ans
};