const countWords = function (words1, words2) {
  let mem = arrToObj(words1)

  const s = new Set()
  Object.keys(mem).forEach(k => {
    if (mem[k]) {
      s.add(k)
    }
  })
  mem = arrToObj(words2)

  let ans = 0
  Object.keys(mem).forEach(k => {
    if (mem[k] && s.has(k)) {
      ans++
    }
  })
  return ans
};

function arrToObj (arr) {
  const mem = {}

  arr.forEach(w => {
    if (mem[w] === undefined) {
      mem[w] = true
    } else {
      mem[w] = false
    }
  })

  return mem
}

console.log(countWords(["leetcode", "is", "amazing", "as", "is"], ["amazing", "leetcode", "is"]))