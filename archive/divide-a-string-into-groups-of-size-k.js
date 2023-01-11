const divideString = function(s, k, fill) {
  if (s.length % k !== 0) {
    for (let i = 0; i< s.length % k; i++) {
      s+=fill
    }
  }

  let ans = []

  for (let i = 0; i < s.length; i+=k) {
    let r = ''
    for (let j = i; j < i + k; j++) {
      r+=s[j]
    }

    ans.push(r)
  }

  return ans
}

console.log(divideString("abcdefghij", 3, "x"))