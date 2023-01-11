const evaluate = function(s, knowledge) {
  let mem = {}
  knowledge.forEach(([a, b]) => {
    mem[a] = b
  })

  s = s.split('')
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      let l = ''
      while (s[i+1]!== ')') {
        i++
        l+=s[i]
      }
      if (mem[l]===undefined) {
        ans+='?'
      } else {
        ans+=mem[l]
      }
    } else if (s[i]!==')') {
      ans+=s[i]
    }
  }

  return ans
}

console.log(evaluate("(a)(a)(a)aaa",   [["a","yes"]]))