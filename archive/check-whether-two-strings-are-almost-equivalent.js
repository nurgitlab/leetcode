const checkAlmostEquivalent = function(word1, word2) {
  let mem = {}
  for (let w of word1) {
    if (mem[w] === undefined) {
      mem[w] = 1
    } else {
      mem[w]++
    }
  }

  for (let w of word2) {
    if (mem[w] === undefined) {
      mem[w] = -1
    } else {
      mem[w]--
    }
  }

  let ans = true
  Object.keys(mem).forEach(k => {
    if (Math.abs(mem[k]) > 3) {
      ans = false
    }
  })

  return ans
}

console.log(checkAlmostEquivalent("zzzyyy",
"iiiiii"))