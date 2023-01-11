const findKthLargest = function(nums, k) {
  return nums.sort((a,b) => a-b)[nums.length - k]
};

console.log(findKthLargest([3,2,1,5,6,4], 2))