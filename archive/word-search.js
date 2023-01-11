var exist = function (board, word) {
  let ans = false
  for (let i in board) {
    for (let j in board[i]) {
      if (board[i][j] === word[0]) {
        ans ||= startSearch(word, [i, j], null, board)
      }
    }
  }

  return ans
};

function startSearch(word, index, prevIndex, board) {
  if (word === '') {
    return true
  }
  if (Number(index[0]) < 0 || Number(index[0]) > board.length - 1) {
    return false
  }

  if (Number(index[1]) < 0 || Number(index[1]) > board[Number(index[0])].length - 1) {
    return false
  }

  if (word.length > (board.length * board[Number(index[0])].length)) {
    return false
  }

  if (word[0] === board[index[0]][index[1]]) {
    let a = false, b = false, c = false, d = false
    if (String([index[0] + 1, index[1]]) !== String(prevIndex)) {
      a = startSearch(word.slice(1), [Number(index[0]) + 1, Number(index[1])], index, board)
    }
    if (String([index[0] - 1, index[1]]) !== String(prevIndex)) {
      b = startSearch(word.slice(1), [Number(index[0]) - 1, Number(index[1])], index, board)
    }
    if (String([index[0], index[1] + 1]) !== String(prevIndex)) {
      c = startSearch(word.slice(1), [Number(index[0]), Number(index[1]) + 1], index, board)
    }
    if (String([index[0], index[1] - 1]) !== String(prevIndex)) {
      d = startSearch(word.slice(1), [Number(index[0]), Number(index[1]) - 1], index, board)
    }

    return (a || b || c || d)
  } else {
    return false
  }
}

console.log(exist(
  [["a", "a", "a", "a"], ["a", "a", "a", "a"], ["a", "a", "a", "a"]],
  "aaaaaaaaaaaaa"
))