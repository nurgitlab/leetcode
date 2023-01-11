var containsNearbyDuplicate = function (nums, k) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = [i]
    } else {
      obj[nums[i]].push(i)
    }
  }
  let ans = false
  Object.keys(obj).forEach(key => {
    if (obj[key].length > 1) {
      for (let i = 0; i < obj[key].length - 1; i++) {
        if (obj[key][i + 1] - obj[key][i] <= k) {
          ans = true
        }
        if (ans) break
      }
    }
  })

  return ans
};

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))

