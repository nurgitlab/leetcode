const findWords = function(board, words) {
  let set = new Set(words)
  let a = [...set]

  let checkSet = new Set()
  checkSet.add('')
  for (let i = 0; i < a.length; i++) {
    let w = a[i]
    let m = ''
    for (let j = 0; j < w.length; j++) {
      m+=w[j]
      checkSet.add(m)
    }
  }
  let ansSet = new Set()

  function goTo (word, prevPos, currentPos) {
    let [x, y] = currentPos
    word+=board[x][y]

    if (checkSet.has(word)) {
      if (set.has(word)) {ansSet.add(word)}

      if (isValid(board, prevPos, [x + 1, y])) {
        goTo(word, [...prevPos, `${x}-${y}`], [x + 1, y])
      }

      if (isValid(board, prevPos, [x - 1, y])) {
        goTo(word, [...prevPos, `${x}-${y}`], [x - 1, y])
      }

      if (isValid(board, prevPos, [x, y - 1])) {
        goTo(word, [...prevPos, `${x}-${y}`], [x, y - 1])
      }

      if (isValid(board, prevPos, [x, y + 1])) {
        goTo(word, [...prevPos, `${x}-${y}`], [x, y + 1])
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      goTo('', [], [i,j])
    }
  }

  return [...ansSet]
}


function isValid(board, prevPos, newPos) {
  let [x,y] = newPos

  if (x >= 0 && x < board.length) {
    if (y >= 0 && y < board[0].length) {
      if (prevPos.includes(`${x}-${y}`)) {
        return false
      } else {
        return true
      }
    }
  }

  return false
}

console.log(findWords(
  [["a"]], ["a"]
))