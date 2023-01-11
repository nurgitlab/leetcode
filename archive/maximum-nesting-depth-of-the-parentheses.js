const maxDepth = function(s) {
  let mem = 0
  let max = 0
  s.split('').forEach(el => {
    if (el === '(') {
      mem++
    } else if (el === ')') {
      mem--
    }

    max = Math.max(mem, max)
  })

  return max
}

console.log(maxDepth("(1)+((2))+(((3)))"))