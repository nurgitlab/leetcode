/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(num) {
  if (num === 0) {return 1}
  let s = ''
  while (num > 0) {
    let ost = num % 2
    s+=ost
    num = Math.floor(num / 2)
  }

  s = s.split('').reverse().map(el => el === '1' ? '0' : '1').join('')

  let cd = ''
  let isFind = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {isFind = true}

    if (isFind) {cd+=s[i]}
  }

  if (cd.length === 0) {return 0}

  let a = 0

  for (let i = 0; i < cd.length; i++) {
    a+=Number(cd[i]) * Math.pow(2, cd.length - 1 - i)
  }

  return a
};