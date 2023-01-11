const findDifferentBinaryString = function(nums) {
  let set = new Set(nums)

  let a = []
  for( let i = 0; i < nums.length; i++) {
    a.push('0')
  }

  let ans = ''

  function c (s, l) {
    if (!set.has(s.join(''))) {ans = s.join('')}
    for (let i = l; i < s.length; i++) {
      if (s[i] === '0') {
        let z = [...s]
        z[i] = '1'
        c(z, i)
      }
    }
  }

  c(a, 0)

  return ans
}

console.log(findDifferentBinaryString(["111","011","001"]))