const checkValid = function (matrix) {
  const n = matrix.length

  let ans = true
  for (let i = 0; i < n; i++) {
    if (isArrayValid(matrix[i], n) === false) {
      ans = false
    }
  }

  for (let j = 0; j < n; j++) {
    let memArr = []
    for (let i = 0; i < n; i++) {
      memArr.push(matrix[i][j])
    }

    if (isArrayValid(memArr, n) === false) {
      ans = false
    }
  }

  return ans
};

function isArrayValid(arr, n) {
  const memObj = {}
  for (let i = 1; i <= n; i++) {
    memObj[i] = 0
  }

  arr.forEach(el => {
    memObj[el]++
  })

  let ans = true
  Object.keys(memObj).forEach(k => {
    if (memObj[k] !== 1) {
      ans = false
    }
  })

  return ans
}

console.log(checkValid(
  [[1, 2, 3], [3, 1, 2], [2, 3, 1]]
))