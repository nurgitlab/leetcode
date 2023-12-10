const buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {return false}
  let r = ''
  let u = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i]!==goal[i]) {
      r+=s[i]
      u+=goal[i]
    }
  }

  if (r.length===2) {
    if (r.split('').reverse().join('') === u) {
      return true
    }
  }
  if (r.length === 0) {
    let mem = {}
    let max = 0
    s.split('').forEach(l => {
      if (mem[l] === undefined) {mem[l] = 0}
      mem[l]++
      max = Math.max(max, mem[l])
    })

    if (max > 1) {
      return true
    }
  }
  return false
}