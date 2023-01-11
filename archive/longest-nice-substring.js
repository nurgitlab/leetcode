const longestNiceSubstring = function (s) {
  s = s.split('')
  let mem = ''
  for (let i = 0; i < s.length; i++) {
    let str = ''
    for (let j = i; j < s.length; j++) {
      str+=s[j]
      if (isNice(str) && str.length > mem.length) {
        mem = str
      }
    }
  }

  return mem
}

function isNice(str) {
  let mem = {}

  str.split('').forEach(s => {
    if (mem[s] === undefined) {
      mem[s] = true
    }
  })

  let ans = true
  Object.keys(mem).forEach(k => {
    if (mem[k.toLowerCase()] === undefined) {
      ans = false
    }
    if (mem[k.toUpperCase()] === undefined) {
      ans = false
    }
  })

  return ans
}
console.log(longestNiceSubstring("YazaAay"))