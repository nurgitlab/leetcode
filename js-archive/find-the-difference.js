var findTheDifference = function (s, t) {
  let obj = {}
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]] === undefined) {
      obj[t[i]] = 1
    } else {
      obj[t[i]] -= 1
      if (obj[t[i]] === 0) {
        delete obj[t[i]]
      }
    }

    if (i < t.length - 1) {
      if (obj[s[i]] === undefined) {
        obj[s[i]] = 1
      } else {
        obj[s[i]] -= 1
        if (obj[s[i]] === 0) {
          delete obj[s[i]]
        }
      }
    }
  }
  let ans
  Object.keys(obj).map(k => {
    ans = k
  })

  return ans
};

console.log(findTheDifference("", "u"))