const findAndReplacePattern = function (words, pattern) {
  return words.filter((word) => isPattern(word, pattern))
}

function isPattern(word, pattern) {
  let mem = {}
  word.split('').forEach((w, i) => {
    if (mem[w] === undefined) {
      mem[w] = new Set()
    }
    mem[w].add(pattern[i])
  })

  let mem2 = {}
  pattern.split('').forEach((w, i) => {
    if (mem2[w] === undefined) {
      mem2[w] = new Set()
    }
    mem2[w].add(word[i])
  })

  Object.keys(mem).forEach(k => {
    mem[k] = [...mem[k]]
    if (mem[k].length === 1) {
      mem[k] = mem[k][0]
    }
  })
  Object.keys(mem2).forEach(k => {
    mem2[k] = [...mem2[k]]
    if (mem2[k].length === 1) {
      mem2[k] = mem2[k][0]
    }
  })

  let ans = true

  Object.keys(mem).forEach(k => {
    if (typeof mem[k]!=="string") {
      ans = false
    } else {
      if (k!== mem2[mem[k]]) {
        ans = false
      }
    }
  })

  Object.keys(mem2).forEach(k => {
    if (typeof mem2[k]!=="string") {
      ans = false
    } else {
      if (k!== mem[mem2[k]]) {
        ans = false
      }
    }
  })

  return ans
}

console.log(isPattern('zxx', 'abb'))
console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"))