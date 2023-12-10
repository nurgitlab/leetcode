var sortColors = function (nums) {
  let mem = {
    0: 0,
    1: 0,
    2: 0,
  }

  nums.forEach(el => {
    mem[el]++
  })

  nums.forEach((_, i) => {
    if (mem[0] > 0) {
      nums[i] = 0
      mem[0]--
    } else if (mem[1] > 0) {
      nums[i] = 1
      mem[1]--
    } else if (mem[2] > 0) {
      nums[i] = 2
      mem[2]--
    }
  })

  return nums
};

console.log(sortColors([2, 0, 2, 1, 1, 0]))