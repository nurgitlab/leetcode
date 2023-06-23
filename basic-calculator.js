/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.split('').reduce((sl, el) => el === ' ' ? sl : sl + el, '')
  return eval(s)
}