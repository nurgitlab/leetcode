const isMatch = function (s, p) {
  let mem = {
    '.': 0
  }
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      if (p[i - 1] !== undefined) {
        mem[p[i - 1]] = Infinity
      }
      continue
    }

    if (mem[p[i]] === undefined) {
      mem[p[i]] = 0
    }
    mem[p[i]] += 1
  }

  let mem2 = {}
  s.split('').forEach(el => {
    if (mem2[el] === undefined) {
      mem2[el] = 0
    }
    mem2[el]++
  })

  Object.keys(mem2).forEach(k => {
    if (mem[k] !== undefined) {
      if (mem[k] === Infinity) {
        mem[k] = mem2[k]
      }
    }

    if (mem[k] !== undefined) {
      if (mem[k] >= mem2[k]) {
        mem[k] -= mem2[k]
        mem2[k] = 0
      } else {
        mem2[k] -= mem[k]
        mem[k] = 0
      }
    }
  })

  Object.keys(mem2).forEach(k => {
    if (mem2[k] > 0 && mem['.'] >= 0) {
      if (mem['.'] >= mem2[k]) {
        mem['.'] -= mem2[k]
        mem2[k] = 0
      } else {
        mem2[k] -= mem['.']
        mem['.'] = 0
      }
    }
  })


  let ans = true

  Object.keys(mem).forEach(k => {
    if (mem[k] > 0 && k !== '.') {
      ans = false
    }
    if (mem2[k] === undefined && k !== '.') {
      ans = false
    }
  })
  Object.keys(mem2).forEach(k => {
    if (mem2[k] > 0) {
      ans = false
    }
  })

  return ans
}

console.log(isMatch("aaa", "aaaa"))