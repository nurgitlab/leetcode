const solveSudoku = function (board) {

  let bk = JSON.parse(JSON.stringify(board))
  let allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  bk = bk.map((s, i) => {
    return s.map((el, j) => {
      if (el === '.') {
        el = allNums
      } else {
        el = Number(el)
      }
      return {
        row: i,
        column: j,
        cell: -1,
        value: el
      }
    })
  })

  let rows = []
  let columns = []

  bk.forEach((s) => {
    rows.push(s)
    s.forEach((el, j) => {
      if (columns[j] === undefined) {
        columns[j] = []
      }
      columns[j].push(el)
    })
  })

  let centers = [
    [1, 1], [1, 4], [1, 7],
    [4, 1], [4, 4], [4, 7],
    [7, 1], [7, 4], [7, 7]
  ]

  let cells = []

  centers.forEach(([x, y], k) => {
    let r = []
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        r.push(bk[i][j])
        bk[i][j].cell = k
      }
    }
    cells.push(r)
  })


  let ans = 1

  function solve(table) {
    table = JSON.parse(table)
    // console.log(table)

    let [co, ro, ce] = getColumns(table)
    filterArr(co)
    filterArr(ro)
    filterArr(ce)


    let ae = allEls(table)

    for (let i = 0; i < ae.length; i++) {
      if (typeof ae[i].value !== "number") {
        let d = [...ae[i].value]
        for (let j = 0; j < d.length; j++) {
          ae[i].value = d[j]
          // console.log(table[0])

          solve(JSON.stringify(table))
          if (isSolved(table)) {
            ans = table
          }
        }

        break
      }
    }

    return table
  }

  solve(JSON.stringify(bk))

  bk = ans.map(r => r.map(el => String(el.value)))

  bk.forEach((r, i) => r.forEach((el, j) => {
    board[i][j] = el
  }))


  return board
  // board[2][0].value = 1
}

function isSolved(table) {
  let isOk = true

  table.forEach(row => {
    row.forEach(el => {
      if (typeof el.value !== "number") {
        isOk = false
      }
    })
  })

  let [col, row, cel] = getColumns(table)

  let cols = [col, row, cel]

  // cols.forEach(z => z.forEach((c, i) => {
  //   let set = new Set()
  //   c.forEach(el => {
  //     if (typeof el.value === 'number') {
  //       set.add(el.value)
  //     }
  //   })
  //   if (set.size!==9) {isOk = false}
  // }))

  return isOk
}

function getColumns(board) {
  let ae = allEls(board)
  let columns = {}
  let rows = {}
  let cells = {}

  ae.forEach(c => {
    if (columns[c.column] === undefined) {
      columns[c.column] = []
    }
    columns[c.column].push(c)

    if (rows[c.row] === undefined) {
      rows[c.row] = []
    }
    rows[c.row].push(c)

    if (cells[c.cell] === undefined) {
      cells[c.cell] = []
    }
    cells[c.cell].push(c)
  })

  let col = []
  let ro = []
  let cel = []

  Object.keys(columns).forEach(k => col.push(columns[k]))
  Object.keys(rows).forEach(k => ro.push(rows[k]))
  Object.keys(cells).forEach(k => cel.push(cells[k]))

  return [col, ro, cel]
}

function filterArr(a) {
  a = a.map(column => {
    let inc = []
    column.forEach(el => {
      if (typeof el.value === "number") {
        inc.push(el.value)
      }
    })

    column = column.map(el => {
      if (Array.isArray(el.value)) {
        el.value = el.value.filter(n => {
          if (inc.includes(n)) {
            inc = inc.filter(q => q !== n)
            return false
          } else {
            return true
          }
        })
      }

      return el
    })

    column = column.map(el => {
      if (Array.isArray(el.value)) {
        if (el.value.length === 1) {
          if (inc.includes(el.value)) {
            el.value = el.value[0]
          }
        }
      }

      return el
    })

    return column
  })

  return a
}

function allEls(table) {
  let allEls = []
  table.forEach(col => {
    col.forEach(e => {
      allEls.push(e)
    })
  })
  return allEls
}

console.log(solveSudoku(
  [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
))