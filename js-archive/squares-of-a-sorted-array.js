var sortedSquares = function (nums) {
  nums.forEach((el, i) => nums[i] = el ** 2)
  nums.sort((a, b) => {
    if (a > b) {
      return 1
    } else {
      return -1
    }
  })
  return nums
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))