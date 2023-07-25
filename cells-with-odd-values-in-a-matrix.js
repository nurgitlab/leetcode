/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
  let mat = Array(m).fill(Array(n).fill(0))

  indices.forEach(([a, b]) => {
    console.log(m)
    for (let i = 0; i < m; i++) {
      console.log(mat)
      mat[i][b]+=1
      console.log(mat)
    }



  })
  let ans = 0

  mat.forEach((line, i) => line.forEach((el, j) => el % 2 === 1 && ans++))

  return ans
}