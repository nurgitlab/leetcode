var sumOfSquares = function(nums) {
  return nums.map((el, i) => nums.length % (i + 1) === 0 ? el : 0).reduce((s, el) => s +( el ** 2 ), 0)
};