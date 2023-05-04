/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let ans = []
  let str = '123456789'
  for (let k = String(low).length; k<= String(high).length; k++) {
    for (let i = 0; i <= str.length - k; i++) {
      let s = str.slice(i, i + k)

      if (low <= Number(s) && Number(s) <= high) {
        ans.push(Number(s))
      }
    }
  }

  return ans
};