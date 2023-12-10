var tupleSameProduct = function(nums) {
  let mem = {}

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let a = nums[i], b = nums[j]

      if (mem[a * b] === undefined) mem[a * b] = 0
      mem[a * b]++
    }
  }

  let ans = 0

  Object.keys(mem).forEach(k => {
    if (mem[k] > 1) {
      ans+=mem[k] * (mem[k] - 1) / 2
    }
  })

  return ans * 8
};

// 2 -> 1
// 3 -> 2 + 1
// 4 -> 3 + 2 + 1
// 5 -> 4 + 3 + 2 + 1