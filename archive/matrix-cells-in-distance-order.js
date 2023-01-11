const allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  let ans = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let d = Math.abs(i - rCenter) + Math.abs(j - cCenter)
      ans.push([[i, j], d])
    }
  }
  ans.sort((a,b) => a[1] - b[1])
  ans = ans.map(el => el[0])
  return ans
}

console.log(allCellsDistOrder( 2, 3, 1, 2))