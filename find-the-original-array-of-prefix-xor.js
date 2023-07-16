var findArray = function(pref) {
  let ans = [], d

  for (let i = 0; i < pref.length; i++) {
    if (i === 0) {
      d = pref[i]
      ans.push(pref[i])

      continue
    }

    let current = d ^ pref[i]
    ans.push(current)
    d ^= current
  }

  return ans
};