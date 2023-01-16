const removeAnagrams = function(words) {

  for (let i = 0; i < words.length - 1; i++) {
    let m = words[i]
    if (isAnagram(m, words[i + 1])) {
      words = [...words.slice(0, i + 1), ...words.slice(i + 2)]
      i--
    }
  }


  return words
}

function isAnagram (w1, w2) {
  if (w1.length !== w2.length) {return false}

  let mem = {}
  w1.split('').forEach(l => {
    if (mem[l] === undefined) {mem[l] = 0}
    mem[l]++
  })

  w2.split('').forEach(l => {
    if (mem[l] === undefined) {mem[l] = 0}
    mem[l]--
  })

  let ans = true
  Object.keys(mem).forEach(k => {
    if (mem[k]!==0) {ans = false}
  })

  return ans
}



console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))