const majorityElement = function(nums) {
  let m = Math.floor(nums.length / 3) + 1
  let mem = {}
  let ans = []

  for (let i = 0; i < nums.length; i++) {
    if (mem[nums[i]] === undefined) {
      mem[nums[i]] = 1
    } else {
      mem[nums[i]]++
    }
  }

  Object.keys(mem).forEach(k => {
    if (mem[k] >= m) {
      ans.push(Number(k))
    }
  })

  return ans
};

console.log(majorityElement([3,2,3]))