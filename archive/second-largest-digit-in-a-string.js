const secondHighest = function (s) {
  let set = new Set()
  s.split('').forEach(l => {
    if (
      l === '0' ||
      l === '1' ||
      l === '2' ||
      l === '3' ||
      l === '4' ||
      l === '5' ||
      l === '6' ||
      l === '7' ||
      l === '8' ||
      l === '9'
    ) {
      set.add(Number(l))
    }
  })

  let sorted = [...set].sort((a, b) => a - b)

  if (sorted.length < 2) {
    return -1
  } else {
    return sorted[sorted.length - 2]
  }
}

console.log(secondHighest("dfa12321afd"))