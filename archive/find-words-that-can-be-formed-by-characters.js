const countCharacters = function(words, chars) {
  let c = {}
  chars.split('').forEach(l => {
    if (c[l] === undefined) {
      c[l] = 0
    }
    c[l]++
  })

  let ans = 0
  words.forEach(word => {
    let local = {...c}
    let a = true
    word.split('').forEach(l => {
      if (local[l] === undefined) {a = false} else {
        if (local[l] > 0) {local[l]--} else {a = false}
      }
    })

    if (a) {ans+=word.length}
  })

  return ans
}

console.log(countCharacters(["hello","world","leetcode"],  "welldonehoneyr"))