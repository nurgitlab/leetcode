const minimumRecolors = function (blocks, k) {
  let max = 0
  blocks = blocks.split('')
  for (let i = 0; i < blocks.length - k + 1; i++) {
    let m = 0
    for (let j = i; j < i + k; j++) {
      if (blocks[j] === 'B') {
        m++
      }
    }
    max = Math.max(max, m)
  }

  return Math.abs(k - max)
}


console.log(minimumRecolors("BWWWBB", 6))