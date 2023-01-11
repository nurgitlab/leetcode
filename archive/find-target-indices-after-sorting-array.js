const targetIndices = function (nums, target) {
  let c = 0
  let n = 0
  nums.forEach(el => {
    if (el === target) {
      n++
    } else if (el < target) {
      c++
    }
  })
  let ans = []
  for (let i = c; i < c + n; i++) {
    ans.push(i)
  }

  return ans
};

console.log(targetIndices([1, 2, 5, 2, 3], 2))