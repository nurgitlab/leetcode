const tictactoe = function (moves) {
  let board = [[1,2,3], [4,5,6], [7,8,9]]

  moves.forEach(([x, y], i) => {
    if (i % 2 === 0) {
      board[x][y] = 'A'
    } else {
      board[x][y] = 'B'
    }
  })

  for (let i = 0; i < 3; i++) {
    if (board[i][1] === board[i][2] && board[i][0] === board[i][1]) {
      return board[i][1]
    }

    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return board[0][i]
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {

    return board[1][1]
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {

    return board[1][1]
  }


  if (moves.length < 9) {
    return 'Pending'
  }
  return 'Draw'
}

console.log(tictactoe([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]))