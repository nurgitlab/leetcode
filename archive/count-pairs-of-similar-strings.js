const similarPairs = function (words) {
  words = words.map(word => {
    let set = new Set(word.split(''))
    let s = [...set].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')

    return s
  })

  let mem = {}
  words.forEach(word => {
    if (mem[word] === undefined) {
      mem[word] = 0
    }
    mem[word]++
  })
  let sv = 0

  Object.keys(mem).forEach(k => {
    sv+=sum(mem[k] - 1)
  })

  return sv
}

function sum(n) {
  let s = 0
  for (let i = 0; i <= n; i++) {
    s+=i
  }

  return s
}


console.log(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]))

//1 - 0
//2 - 1
//3 - 2 + 1
//4 - 3 + 2 + 1