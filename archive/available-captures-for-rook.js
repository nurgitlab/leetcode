const numRookCaptures = function (board) {
  let emp = []
  for (let i = 0; i < board[0].length; i++) {
    emp.push('.')
  }
  board = [emp, ...board, emp]
  for (let i = 0; i < board.length; i++) {
    board[i] = ['.', ...board[i], '.']
  }

  let ans = 0

  function lookWithDirection(direction, currentX, currentY) {
    if (board[currentX][currentY] === 'p') {
      ans++
    }
    if (board[currentX][currentY] === '.') {
      if (direction === 'up') {
        if (currentX > 0) {
          lookWithDirection(direction, currentX - 1, currentY)
        }
      }
      if (direction === 'down') {
        if (currentX < board.length - 1)
        lookWithDirection(direction, currentX + 1, currentY)
      }

      if (direction === 'left') {
        if (currentY > 0) {
          lookWithDirection(direction, currentX, currentY - 1)
        }
      }

      if (direction === 'right') {
        if (currentY < board[0].length - 1)
        lookWithDirection(direction, currentX, currentY + 1)
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        lookWithDirection('up', i - 1, j)
        lookWithDirection('down', i + 1, j)
        lookWithDirection('left', i, j - 1)
        lookWithDirection('right', i, j + 1)
      }
    }
  }

  return ans
};

console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))