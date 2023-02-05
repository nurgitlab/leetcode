const isAlienSorted = function(words, order) {
  let mem = {}

  order.split('').forEach((l, i) => {
    mem[l] = i
  })

  let copy = [...words].sort((a,b) => alienSort(mem, a,b))
  console.log(mem, words,copy)

  for (let i = 0; i < copy.length; i++) {
    if (copy[i]!==words[i]) {
      return false
    }
  }

  return true
}

function alienSort (mem, w1, w2) {
  for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
    if (w1[i]!==w2[i]) {
      return mem[w1[i]] - mem[w2[i]]
    }
  }

  return w1.length - w2.length
}