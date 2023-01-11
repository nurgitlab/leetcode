const rotate = function(nums, k) {
  let mem
  for (let i = 0; i < nums.length - k; i++){
    // 1 2 3 y4 5 6y 7 8 9
    // 7 8 9 y4 y5 y6 1 2 3
    // 7 8 9
    if (i<k) {
      console.
      mem = nums[i]
      nums[i] = nums[nums.length - k + i]
      nums[nums.length - k + i] = mem
    }
  }

  return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))