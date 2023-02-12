/**
 * @param {number} n
 * @return {number}
 */
const binaryGap = function(n) {
  let s = ''

  while (n > 0) {
    s+=n%2
    if (n%2 === 0) {
      n/=2
    } else {
      n = (n - 1) / 2
    }
  }

  s = s.split('').reverse().join('')
  let r = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      let j = 1
      while (s[i + 1]!=='1') {
        j++
        i++

        if (i === s.length) {
          j = 0
          break
        }
      }

      r = Math.max(j, r)
    }
  }
  console.log(s)

  return r
};

//8 / 2 = 4 (0)
//4 / 2 = 2 (0)
//2 / 2 = 1 (0)
//