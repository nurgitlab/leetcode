var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1

  let ans = -1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)

    if (nums[mid] === target) {
      ans = mid
      break
    } else {
      if (nums[mid] > target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }

  return ans
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))