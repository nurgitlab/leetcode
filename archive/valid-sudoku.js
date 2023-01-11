const isValidSudoku = function (board) {
  let columns = []

  let rows = []
  for (let i = 0; i < board[0].length; i++) {
    let s = ''
    let r = ''
    let miniRows = ''
    for (let j = 0; j < board.length; j++) {
      s += board[j][i]
      r += board[i][j]
      miniRows += board[i][j]
      if (miniRows.length === 3) {
        rows.push(miniRows)
        miniRows = ''
      }
    }
    columns.push(s.split('.').join('').split(''))
    columns.push(r.split('.').join('').split(''))
  }

  for (let i = 0; i < rows.length - 6; i++) {
    if (rows[i].length > 0) {
      columns.push((rows[i] + rows[i + 3] + rows[i + 6]).split('.').join('').split(''))
      rows[i + 3] = ''
      rows[i + 6] = ''
    }
  }

  for (let i = 0; i < columns.length; i++) {
    let set = new Set(columns[i])
    if (set.size !== columns[i].length) {
      return false
    }
  }
  return true
};

console.log(isValidSudoku(
  [["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
))