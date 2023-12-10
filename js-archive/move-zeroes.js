var moveZeroes = function (nums) {
  let numOfNulls = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      numOfNulls += 1
      nums.splice(i, 1)
      i--
    }
  }
  for (let i = 0; i < numOfNulls; i++) {
    nums.push(0)
  }

  return nums
};

console.log(moveZeroes([0, 0, 1]))