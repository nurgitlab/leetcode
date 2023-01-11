var summaryRanges = function (nums) {
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    let mem = i
    while (nums[i] + 1 === nums[i + 1]) {
      i++
    }
    if (nums[mem] !== nums[i]) {
      ans.push(`${nums[mem]}->${nums[i]}`)
    } else {
      ans.push(`${nums[mem]}`)
    }
  }

  return ans
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))