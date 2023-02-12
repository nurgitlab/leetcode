const validPalindrome = function(s) {
  let r = 0
  let j = s.length - 1
  let ans1 = true
  for (let i = 0; i < s.length /2; i++) {
    if (s[i] === s[j]) {
      j-=1
      continue
    } else {
      if (r === 1) {
        ans1 = false
      }
      r+=1
      continue
    }
  }

  r = 0
  s = rev(s)
  j = s.length - 1
  let ans2 = true

  for (let i = 0; i < s.length /2; i++) {
    if (s[i] === s[j]) {
      j-=1
      continue
    } else {
      if (r === 1) {
        ans2 = false
      }
      r+=1
      continue
    }
  }

  return ans1 || ans2
};

function rev(s) {
  return s.split('').reverse().join('')
}