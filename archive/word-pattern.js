const wordPattern = function(pattern, s) {
  pattern = pattern.split('')
  s = s.split(' ')
  if (pattern.length !== s.length) {
    return false
  }

  let mem = {}
  let set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (mem[pattern[i]]!==s[i]) {
      if (mem[pattern[i]] === undefined) {
        if (set.has(s[i])) {
          return false
        } else {
          mem[pattern[i]] = s[i]
          set.add(s[i])
        }
      } else {
        return false
      }
    }
  }

  return true
}

console.log(wordPattern("abba", "dog cat cat dog"))