var singleNumber = function (nums) {
  let obj = {}
  nums.forEach((num, i) => {
    if (obj[num] === undefined) {
      obj[num] = 1
    } else {
      obj[num] += 1
    }
  })
  let ans = null
  Object.keys(obj).forEach(k => {
    if (obj[k] === 1) {
      ans = k
    }
  })

  return ans
};

console.log(singleNumber([1]))