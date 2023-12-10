/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let isChanged = true
  function getValue(x, y) {
    if (board[x] && board[x][y]) {
      if (board[x][y] === 2) return 0
      return Math.abs(board[x][y])
    }

    return 0
  }

  while (isChanged) {
    isChanged = false

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let sum = [
          [i - 1, j - 1],
          [i - 1, j],
          [i - 1, j + 1],
          [i, j - 1],
          [i, j + 1],
          [i + 1, j - 1],
          [i + 1, j],
          [i + 1, j + 1],
        ].reduce((s, [x, y]) => s + getValue(x, y), 0)
        if (board[i][j] === 0) {
          if (sum === 3) {
            board[i][j] = 2
            isChanged = true
          }
        } else {
          if (sum > 3 || sum < 2) {
            board[i][j] = -1
            isChanged = true
          }
        }
      }
    }
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 2) board[i][j] = 1
        if (board[i][j] === -1) board[i][j] = 0
      }
    }

    break
  }

  return board
}

//Любая живая клетка с менее чем двумя живыми соседями умирает

//Любая живая клетка с 2-3 живыми соседями живет до следующего поколения.
//Любая живая клетка с 4+ соседями умирает
//Любая мертвая клетка, имеющая 3 соседа, становится живой клеткой, как бы путем размножения.

//Следующее состояние создается путем одновременного применения вышеуказанных правил к каждой ячейке в текущем состоянии, в котором одновременно происходят рождения и смерти. Учитывая текущее состояние доски сетки m x n, вернуть следующее состояние.