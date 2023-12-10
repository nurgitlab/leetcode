/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
  let mat = Array(n).fill(0).map(_ => Array(n).fill(0))

  queries.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        mat[i][j]++
      }
    }
  })

  return mat
};