var findDisappearedNumbers = function (nums) {
  let max = nums.length
  let min = 1
  let set = new Set()

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }

  let ans = []
  for (let i = min; i <= max; i++) {
    if (set.has(i)) {
      continue
    } else {
      ans.push(i)
    }
  }

  return ans
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))