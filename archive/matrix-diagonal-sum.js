var diagonalSum = function (mat) {
  let sum = 0
  let n = mat.length
  if (n % 2 === 0) {
    for (let i = 0; i < n; i++) {
      sum+=mat[i][i] + mat[n-1-i][i]
    }
  } else {
    let c = Math.floor(n / 2)
    for (let i = 0; i < n; i++) {
      if (c === i) {
        sum+=mat[i][i]
      } else {
        sum+=mat[i][i] + mat[n-1-i][i]
      }
    }
  }

  return sum
};

console.log(diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  ]
))