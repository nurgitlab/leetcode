const smallestEqual = function(nums) {
  let ans = -1

  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      ans = i
      break
    }
  }

  return ans
};

console.log(smallestEqual([1,2,3,4,5,6,7,8,9,0]))