const bestHand = function (ranks, suits) {
  let m = {}
  suits.forEach(el => {
    if (m[el] === undefined) {
      m[el] = 1
    } else {
      m[el]++
    }
  })

  for (let k in m) {
    if (m[k] === 5) {
      return 'Flush'
    }
  }

  let mem = {}
  ranks.forEach(r => {
    if (mem[r] === undefined) {
      mem[r] = 1
    } else {
      mem[r]++
    }
  })
  let d = false
  for (let k in mem) {
    if (mem[k] >= 3) {
      return 'Three of a Kind'
    }
    if (mem[k] === 2) {
      d = true
    }
  }

  if (d) {
    return 'Pair'
  }

  return 'High Card'
}

console.log(bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"]))