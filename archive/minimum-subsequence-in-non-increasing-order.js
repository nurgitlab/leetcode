const minSubsequence = function (nums) {
  nums.sort((a, b) => a - b)
  let mem = []

  nums.forEach((el, i) => {
    if (i === 0) {
      mem.push(el)
    } else {
      mem.push(mem[mem.length - 1] + el)
    }
  })

  let n = 0
  for (let i = 0; i < nums.length; i++) {
    if (mem[mem.length - 1] - mem[i] <= mem[i]) {
      n = i
      break
    }
  }
  let ans = []
  for (let i = n; i < nums.length; i++) {
    ans.push(nums[i])
  }
  return ans.sort((a,b) => b - a)
}

console.log(minSubsequence([4]))