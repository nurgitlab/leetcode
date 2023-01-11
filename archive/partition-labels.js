const partitionLabels = function (s) {
  let mem = {}
  s.split('').forEach((el, i) => {
    if (mem[el] === undefined) {
      mem[el] = {
        min: i,
        max: i
      }
    } else {
      if (i > mem[el].max) {
        mem[el].max = i
      }
    }
  })
  let ans = []
  for (let i = 0; i < s.length; i++) {
    let max = mem[s[i]].max
    for (let j = i; j < max; j++) {
      max = Math.max(max, mem[s[j]].max)
    }

    ans.push(max - i + 1)
    i += max - mem[s[i]].min
  }

  return ans
}

console.log(partitionLabels("qiejxqfnqceocmy"))