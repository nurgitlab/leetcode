const mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.toLowerCase().replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, ' ').split(' ')
  let set = new Set(banned)

  let mem = {}
  paragraph.forEach(el => {
    if (!set.has(el) && el.length > 0) {
      if (mem[el] === undefined) {mem[el] = 1} else {
        mem[el]++
      }
    }
  })

  let max = 0
  let el

  Object.keys(mem).forEach(k => {
    if (mem[k] > max) {
      max = mem[k]
      el = k
    }
  })
  return el
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))