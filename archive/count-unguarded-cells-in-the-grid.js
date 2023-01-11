const countUnguarded = function (m, n, guards, walls) {
  let board = []
  for (let i = 0; i < m; i++) {
    board.push([])
    for (let j = 0; j < n; j++) {
      board[i].push(false)
    }
  }

  guards.forEach(g => {
    board[g[0]][g[1]] = 'G'
  })

  walls.forEach(w => {
    board[w[0]][w[1]] = 'W'
  })

  function canWeGo(direction, x, y) {
    if (direction === 'up') {
      x--
    }
    if (direction === 'down') {
      x++
    }
    if (direction === 'left') {
      y--
    }
    if (direction === 'right') {
      y++
    }

    if (x >= 0 && x <= m - 1 && y >= 0 && y <= n - 1) {
      return true
    } else {
      return false
    }
  }

  function goWithDirection(direction, x, y) {
    if (direction === 'up') {
      x--
    }
    if (direction === 'down') {
      x++
    }
    if (direction === 'left') {
      y--
    }
    if (direction === 'right') {
      y++
    }

    if (direction === '') {
      if (canWeGo('up', x, y)) {
        goWithDirection('up', x, y)
      }
      if (canWeGo('down', x, y)) {
        goWithDirection('down', x, y)
      }
      if (canWeGo('left', x, y)) {
        goWithDirection('left', x, y)
      }
      if (canWeGo('right', x, y)) {
        goWithDirection('right', x, y)
      }
    }
    if (typeof board[x][y] === "boolean") {
      board[x][y] = true
      if (canWeGo(direction, x, y)) {
        goWithDirection(direction, x, y)
      }
    }
  }

  guards.forEach(g => {
    goWithDirection('', g[0], g[1])
  })

  let ans = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!board[i][j]) {
        ans++
      }
    }
  }

  return ans
};

console.log(countUnguarded(
  3,3, [[1,1]], [[0,1],[1,0],[2,1],[1,2]]
))