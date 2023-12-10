var zeroFilledSubarray = function(nums) {
  let mem = []

  for (let i = 0; i < nums.length; i++) {
    let k = 0
    while (nums[i] === 0) {
      k++
      i++
    }

    if (k > 0) mem.push(k)
  }

  return mem.reduce((sum, el) => sum + el * (el + 1) / 2, 0)

  // (5 + 1)/2 * 5
};
