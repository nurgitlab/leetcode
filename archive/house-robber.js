var rob = function (nums) {
  for (let i = nums.length - 3; i >= 0; i--) {
    nums[i] += Math.max(nums[i + 2], nums[i + 3])
  }

  return Math.max(nums[0], nums[1])
};

console.log(rob([2, 1, 1, 2]))

// function minCostClimbingStairs(costs) {
//   costs.push(0);
//
//   for (let i = costs.length - 3; i >= 0; i--) {
//     costs[i] += Math.min(costs[i + 1], costs[i + 2]);
//   }
//
//   return Math.min(costs[0], costs[1]);
// }