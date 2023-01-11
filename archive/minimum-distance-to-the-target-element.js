const getMinDistance = function(nums, target, start) {
  let mem = Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      mem = Math.min(Math.abs(start - i), mem)
    }
  }

  return mem
};

console.log(getMinDistance([5,2,3,5,5], 5 , 2))