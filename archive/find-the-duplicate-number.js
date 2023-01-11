const findDuplicate = function(nums) {
  let mem = {}
  let ans
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    if (mem[n] === undefined) {
      mem[n] = true
    } else {
      ans = n
    }
  }

  return ans
};

console.log(findDuplicate([1,3,4,2,2]))