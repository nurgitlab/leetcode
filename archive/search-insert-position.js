var searchInsert = function (nums, target) {
  let n = Math.floor(nums.length / 2)
  let m = Math.floor(nums.length / 4)
  let prevN
  let mem = 20

  if (m < 1) {
    m = 1
  }

  while (n > -1 && n < nums.length && mem > 0) {
    if (prevN === n) {
      break
    }
    prevN = n
    if (nums[n] === target) {
      break
    } else if (nums[n] > target) {
      if (nums[n - 1] < target) {
        break
      } else {
        n -= m
      }
    } else if (nums[n] < target) {
      if (nums[n + 1] > target) {
        n++
        break
      } else {
        n += m
      }
    }
    m = Math.floor(m / 2)
    if (m < 1) {
      mem--
      m = 1
    }
  }

  if (n < 0) {
    n = 0
  }
  return n
}

console.log(searchInsert([1, 3, 5], 4))