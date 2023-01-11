const greatestLetter = function (s) {
  const mem = {}

  for (let i = 0; i < s.length; i++) {
    let isUpper = (s[i] === s[i].toUpperCase())
    if (isUpper) {
      if (mem[s[i]] === undefined) {
        mem[s[i]] = [false, true]
      } else {
        mem[s[i]][1] = true
      }
    } else {
      if (mem[s[i].toUpperCase()] === undefined) {
        mem[s[i].toUpperCase()] = [true, false]
      } else {
        mem[s[i].toUpperCase()][0] = true
      }
    }
  }

  let ans = []
  Object.keys(mem).forEach(k => {
    if (mem[k][0] && mem[k][1]) {
      ans.push(k)
    }
  })

  ans.sort((a, b) => {
    if (a > b) {
      return 1
    } else {
      return -1
    }
  })

  if (ans[ans.length - 1] === undefined) {
    return ''
  } else {
    return ans[ans.length - 1]
  }
};

console.log(greatestLetter("arRAzFif"))