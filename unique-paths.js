/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let board = Array(m).fill(Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        board[i][j] = 1
      } else {
        board[i][j] = getValue(board, i - 1, j) + getValue(board, i, j - 1)
      }
    }
  }

  return board[m - 1][n - 1]
}

function getValue (board, x, y) {
  if (x >= 0 && x < board.length) {
    if (y >= 0 && y < board[x].length) {
      return board[x][y]
    }
  }

  return 0
}

//7

// x x
// x x
// x x