var searchMatrix = function (matrix, target) {
  matrix = matrix.flat()

  let l = 0, r = matrix.length - 1
  let ans = false
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (matrix[mid] === target) {
      ans = true
      break
    }
    if (matrix[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))