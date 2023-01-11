const checkRecord = function(s) {
  let a = 0
  s.split('').forEach(l => {
    if (l === 'A') {a++}
  })

  if (s.split('LLL').join('').length < s.length) {
    return false
  }

  if (a >= 2) {
    return false
  }

  return true
}