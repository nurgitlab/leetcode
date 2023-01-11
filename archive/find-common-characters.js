const commonChars = function (words) {
  let mem = {}
  words.forEach((word, i) => {
    if (i === 0) {
      word.split('').forEach(el => {
        if (mem[el] === undefined) {
          mem[el] = 0
        }
        mem[el]++
      })
    } else {
      let lm = {}
      word.split('').forEach(el => {
        if (lm[el] === undefined) {
          lm[el] = 0
        }
        lm[el]++
      })
      console.log(lm)

      let lz = {}
      Object.keys(mem).forEach(k => {
        if (lm[k] !== undefined) {
          lz[k] = Math.min(mem[k], lm[k])
        }
      })
      mem = JSON.parse(JSON.stringify(lz))
    }
  })

  let ans = []
  console.log(mem, words.length)
  Object.keys(mem).forEach(k => {
    for (let i = 0; i < mem[k]; i++) {
      ans.push(k)
    }
  })

  return ans
}

console.log(commonChars(["bella","label","roller"]))