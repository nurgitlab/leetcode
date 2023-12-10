var fourSum = function (nums, target) {
    let n = nums.length
    nums.sort((a, b) => {
      if (a < b) {
        return -1
      } else {
        return 1
      }
    })
    let ans = []
    let l, r, a, b
    for (let i = 0; i < n; i++) {
      a = nums[i]
      for (let j = i + 1; j < n; j++) {
        l = j + 1
        r = n - 1
        b = nums[j]
        while (nums[j] === nums[j + 1] && j < n) {
          j++
        }
        while (l < r) {
          let sum = a + b + nums[l] + nums[r]
          if (sum > target) {
            r--
          } else if (sum < target) {
            l++
          } else {
            let p = [a, b, nums[l], nums[r]]
            ans.push(p)
            l++
            while (nums[l] === nums[l - 1] && l < r) {
              l++
            }
          }
        }
      }
      while (nums[i] === nums[i + 1] && i < n) {
        i++
      }
    }

    return ans
  }
;

console.log(fourSum([2, 2, 2, 2, 2], 8))