const hasGroupsSizeX = function (deck) {
  let mem = {}

  deck.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })

  let min = Infinity

  Object.keys(mem).forEach(k => {
    if (mem[k] < min) {
      min = mem[k]
    }
  })

  if (min < 2) {
    return false
  }

  for (let i = 2; i <= min; i++) {
    let ans = true

    Object.keys(mem).forEach(k => {
      if (mem[k] % i !== 0) {
        ans = false
      }
    })

    if (ans) {
      return true
    }
  }

  return false
}

console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]))