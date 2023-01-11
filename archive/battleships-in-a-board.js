const countBattleships = function (board) {
  let emptyString = []

  for (let i = 0; i < board[0].length; i++) {
    emptyString.push('.')
  }
  board = [emptyString, ...board, emptyString]
  for (let i = 0; i < board.length; i++) {
    board[i] = ['.', ...board[i], '.']
  }

  // обернули поле водой
  // уничтожим корабли и подсчитаем их кол-во
  // выдадим кол-во уничтоженных кораблей

  function clearCell(x, y) {
    board[x][y] = '.'

    if (board[x + 1][y] === 'X') {
      clearCell(x + 1, y)
    }
    if (board[x - 1][y] === 'X') {
      clearCell(x - 1, y)
    }
    if (board[x][y + 1] === 'X') {
      clearCell(x, y + 1)
    }
    if (board[x][y - 1] === 'X') {
      clearCell(x, y - 1)
    }
  }

  let countOfShips = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        countOfShips++
        clearCell(i,j)
      }
    }
  }

  return countOfShips
};

console.log(countBattleships([["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]))