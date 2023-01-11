const kWeakestRows = function (mat, k) {
  let arr = []
  mat.forEach((str, i) => {
    let sold = 0
    str.forEach(el => {
      if (el === 1) {
        sold++
      }
    })
    arr.push([sold, i])
  })

  arr.sort((a,b) => {
    if (a[0]>b[0]) {
      return 1
    } else if (a[0]===b[0]) {
      if (a[1] > b[1]) {
        return 1
      } else {
        return -1
      }
    } else {
      return -1
    }
  })

  let ans = []

  for (let i = 0; i < k; i++) {
    ans.push(arr[i][1])
  }

  return ans
};

console.log(kWeakestRows(
  [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]],
  3))