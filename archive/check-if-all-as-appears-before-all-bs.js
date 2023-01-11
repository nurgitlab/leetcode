var checkString = function(s) {
  let ans = true
  let a = true
  for (let i = 0; i < s.length; i++) {
    if (a) {
      if (s[i]!=='a') {
        a = false
      }
    } else {
      if (s[i]==='a') {
        ans = false
      }
    }

    if (!ans) break
  }

  return ans
};

console.log(checkString('aaabbbbab'))