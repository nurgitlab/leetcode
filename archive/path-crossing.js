const isPathCrossing = function(path) {
  let x = 0
  let y = 0

  let mem = {
    '[0,0]': false
  }

  let ans = false
  path.split('').forEach(d => {
    if (d === 'N') {y++}
    if (d === 'S') {y--}
    if (d === 'E') {x++}
    if (d === 'W') {x--}

    if (mem[`[${x},${y}]`] === undefined) {
      mem[`[${x},${y}]`] = false
    } else {
      ans = true
    }
  })

  return ans
}

console.log(isPathCrossing("NES"))