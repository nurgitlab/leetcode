const jump = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      nums[i] = [nums[i], 0]
    } else {
      nums[i] = [nums[i], Infinity]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (
      let j = i + 1;
      j <= Math.min(i +  nums[i][0], nums.length - 1);
      j++
    ) {
      nums[j][1] = Math.min(nums[j][1], nums[i][1] + 1)
    }
  }

  return nums[nums.length - 1][1]
};

console.log(jump([2,3,1,1,4]))