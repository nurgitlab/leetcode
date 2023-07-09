/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
  let mem = {
    '0': 0,
    '1': 0
  }
  for (let i = 0; i < s.length; i++) {
    let v = 1
    while (s[i] === s[i + 1]) {
      i++
      v++
    }

    mem[s[i]] = Math.max(mem[s[i]], v)
  }

  return mem[1] > mem[0]
}