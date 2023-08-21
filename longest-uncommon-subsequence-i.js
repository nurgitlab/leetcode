/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  let ans = -1

  function rec (c, d) {
    for (let i = 0; i < c.length; i++) {
      let r = ''

      for (let j = i; j < c.length; j++) {
        r+=c[j]

        if (d.split(r).join('') === d) ans = Math.max(ans, r.length)
      }
    }
  }

  rec(a, b)
  rec(b, a)

  return ans
};