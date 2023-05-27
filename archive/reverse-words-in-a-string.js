/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let word = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {continue}
    let w = ''
    while (s[i] !== ' ' && i < s.length) {
      w+=s[i]
      i++
    }
    word.push(w)
  }

  return word.reverse().join(' ')
};