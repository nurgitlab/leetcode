const removeStars = function(s) {
  s = s.split('')
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      ans = ans.slice(0, -1)
    } else {
      ans+=s[i]
    }
  }
  return ans
}

console.log(removeStars("erase*****"))

console.log('12345'.slice(0, -1))