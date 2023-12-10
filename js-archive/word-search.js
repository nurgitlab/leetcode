/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let ans = false

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      ans||=check(board.deepCopy(), word, i, j)
    }
  }
  return ans
};

Array.prototype.deepCopy = function () {
  return this.map(el => [...el])
}

function check (board, word, x, y) {
  if (word.length === 0) {
    return true
  }
  if (0 <= x && x < board.length) {
    if (0 <= y && y < board[x].length) {

      if (word[0] === board[x][y]) {
        board[x][y] = '*'

        return (
          check(board.deepCopy(), word.slice(1), x + 1, y) ||
          check(board.deepCopy(), word.slice(1), x - 1, y) ||
          check(board.deepCopy(), word.slice(1), x, y + 1) ||
          check(board.deepCopy(), word.slice(1), x, y - 1)
        )
      }
    }
  }

  return false
}