var twoSum = function (numbers, target) {
  if (numbers.length === 0) return []
  if (numbers.length === 1) {
    if (numbers[0] === target) {
      return 1
    } else {
      return null
    }
  }
  let n = numbers.length - 1
  let ans = null
  for (let i = 0; i < n; i++) {
    let sum = 0
    sum += numbers[i]
    let l = i + 1
    let r = n
    while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      let totalSum = numbers[mid] + sum
      if (totalSum === target) {
        ans = [i + 1, mid + 1]
        break
      } else {
        if (totalSum > target) {
          r = mid - 1
        } else {
          l = mid + 1
        }
      }
    }
    if (ans !== null) break
  }

  return ans
};

console.log(twoSum([-1], -1))