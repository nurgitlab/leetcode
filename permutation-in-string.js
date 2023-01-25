const checkInclusion = function(s1, s2) {
  let mem = {}
  s2 = s2.split('')

  for (let i = 0; i < s1.length; i++) {
    if (mem[s2[i]] === undefined) {
      mem[s2[i]] = 0
    }

    mem[s2[i]]++
  }



  if (isEqual(s1,{...mem})) {
    return true
  }


  for (let i = s1.length; i < s2.length; i++) {
    mem[s2[i - s1.length]]-=1
    if (mem[s2[i - s1.length]] === 0) {delete mem[s2[i - s1.length]]}

    if (mem[s2[i]] === undefined) {
      mem[s2[i]] = 0
    }

    mem[s2[i]]++

    console.log(isEqual(s1,{...mem}), mem)

    if (isEqual(s1,{...mem})) {
      return true
    }
  }

  return false
}

function isEqual (s1, obj) {
  s1.split('').forEach(l => {
    obj[l]--
  })

  let ans = true
  Object.keys(obj).forEach(k => {
    if (obj[k]!==0) {ans = false}
  })

  return ans
}