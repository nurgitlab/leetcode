/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
  let [a,b, _,c,d] = time.split('')
  let ans = 1
  if (a === '?' && b === '?') {
    ans = 24
  } else if (a === '?') {
    if (Number(b) < 4) {
      //00 01 02 03
      //10 11 12 13
      //20 21 22 23
      ans = 3
    } else {
      ans = 2
    }
  } else if (b === '?') {
    if (Number(a) < 2) {
      ans = 10
    } else {
      ans = 4
    }
  }

  if (c === '?' && d === '?') {
    return ans*60
  }

  if (c === '?') {
    return ans*6
  }

  if (d === '?') {
    return ans*10
  }

  return ans
};