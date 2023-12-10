const queensAttacktheKing = function (queens, king) {
  let ans = []

  queens.forEach(queen => {
    let think = []
    if (queen[0] === king[0]) {
      think = [0, 1]
    }

    if (queen[1] === king[1]) {
      think = [1, 0]
    }
    if (think.length > 0) {
      let q = true
      let a = think[0]
      let b = think[1]
      queens.forEach(que => {
        if (que[a] === queen[a] &&
          que[b] > Math.min(queen[b], king[b]) &&
          que[b] < Math.max(queen[b], king[b])
        ) {
          q = false
        }
      })

      if (q) {
        ans.push(queen)
      }
    }

    if (Math.abs(queen[1] - king[1]) === Math.abs(queen[0] - king[0])) {
      console.log(queen)
      let d
      let l
      if (queen[1] > king [1]) {
        d = 1
      } else {
        d = -1
      }

      if (queen[0] > king [0]) {
        l = 1
      } else {
        l = -1
      }
      let j = king[1]
      let i = king[0]
      let q = true
      let k = 0
      while (k < Math.abs(queen[0] - king[0])) {
        queens.forEach(que => {
          if (que[0] === i && que[1] === j && que[0] !== queen[0] && que[1] !== queen[1]) {
            q = false
          }
        })

        j += d
        i += l
        k++
      }


      if (q) {
        ans.push(queen)
      }
    }
  })

  return ans
}

console.log(queensAttacktheKing([[5, 6], [7, 7], [2, 1], [0, 7], [1, 6], [5, 1], [3, 7], [0, 3], [4, 0], [1, 2], [6, 3], [5, 0], [0, 4], [2, 2], [1, 1], [6, 4], [5, 4], [0, 0], [2, 6], [4, 5], [5, 2], [1, 4], [7, 5], [2, 3], [0, 5], [4, 2], [1, 0], [2, 7], [0, 1], [4, 6], [6, 1], [0, 6], [4, 3], [1, 7]], [3, 4]))