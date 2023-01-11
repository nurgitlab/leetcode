let areOccurrencesEqual = function(s) {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]===undefined) {
      obj[s[i]] = 1
    } else {
      obj[s[i]]++
    }
  }
  let mem
  let ans = true
  Object.keys(obj).forEach((k,i) => {
    if (i === 0) {
      mem = obj[k]
    } else {
      if (mem !== obj[k]) {
        ans = false
      }
    }
  })

  return ans
};