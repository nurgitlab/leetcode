const largestNumber = function (nums) {
  nums = nums.sort((a, b) => {
      let bs = String(a)
      let as = String(b)

      for (let i = 0; i < Math.min(as.length, bs.length); i++) {
        if (as[i] !== bs[i]) {
          return Number(as[i]) - Number(bs[i])
        }
      }

      return -Number(bs + as) + Number(as + bs)
    }
  )
  let ans = ''

  nums.forEach(el => ans += el)

  let r = ''
  let k = true
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === '0' && k) {
      continue
    } else {
      r += ans[i]
      k = false
    }
  }
  if (r.length === 0) {
    return '0'
  }
  return r
}

console.log(largestNumber([0, 0]))