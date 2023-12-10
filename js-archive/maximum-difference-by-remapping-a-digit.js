/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
  num = String(num).split('')
  let [a1, a2, mem1, mem2] = [[...num],[...num]]
  for (let i = 0; i < a2.length; i++) {
    if (a2[i] !== '9' && mem1 === undefined) {
      mem1 = a2[i]
      a2[i] = '9'
    }

    if (a2[i] === mem1) {
      a2[i] = '9'
    }
  }

  mem2 = a1[0]
  a1 = a1.map(el => el === mem2 ? '0' : el)

  a1 = toNum(a1)
  a2 = toNum(a2)
  console.log(a1, a2)
  return a2 - a1
};

function toNum (arr) {
  return Number(arr.join(''))
}