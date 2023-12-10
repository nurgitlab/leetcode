const areAlmostEqual = function (s1, s2) {
  let r = 0
  let m1 = ''
  let m2 = ''
  if (s1.length !== s2.length) {return false}


  for (let i = 0; i < s1.length; i++) {
    if (s1[i]!==s2[i]) {
      r++

      if (r === 1) {
        m1+= s1[i] + s2[i]
      }

      if (r === 2) {
        m2+= s2[i] + s1[i]
      }
    }
  }

  if (r === 0) {
    return true
  }

  if (r === 2) {
    return m1 === m2
  }

  return false
}