var majorityElement = function (nums) {
  let m = Math.floor(nums.length / 2)
  let mem = {}
  nums.forEach((el) => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })
  let ans
  Object.keys(mem).forEach(el => {
    if (mem[el] > m) {
      ans = el
    }
  })
  return ans
};

console.log(majorityElement([3]))