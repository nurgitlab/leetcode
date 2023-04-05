/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  function go(x,y) {
    if (0 <= x && x < board.length && 0 <= y && y < board[0].length) {
      if (board[x][y] === 'O') {
        board[x][y] = 'Z'
        go(x, y + 1)
        go(x, y - 1)
        go(x + 1, y)
        go(x - 1, y)
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    go(i, 0)
    go(i, board[i].length - 1)
  }

  for (let i = 0; i < board[0].length; i++) {
    go(0, i)
    go(board.length - 1, i)
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'Z') {
        board[i][j] = 'O'
      } else {
        board[i][j] = 'X'
      }
    }
  }

  return board
};