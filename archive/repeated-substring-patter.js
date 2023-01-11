var repeatedSubstringPattern = function (s) {
  let sub = ''
  let ans = false
  for (let i = 0; i < s.length - 1; i++) {
    sub += s[i]

    if (s.split(sub).join('') === '') {
      ans = true
    }
  }

  return ans
};

console.log(repeatedSubstringPattern('abab'))