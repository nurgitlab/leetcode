/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {s[j] = ''}
    }
  }

  return s.join('').length
}