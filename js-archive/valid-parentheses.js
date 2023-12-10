var isValid = function (s) {
  let ans = true
  let mem = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      mem.push(s[i])
    } else {
      let f = mem.pop()
      if (f === '(' && s[i] === ')') {
        ans = true;
        continue
      }
      if (f === '[' && s[i] === ']') {
        ans = true;
        continue
      }
      if (f === '{' && s[i] === '}') {
        ans = true;
        continue
      }
      ans = false
      break
    }
  }

  if (mem.length > 0) {
    return false
  } else {
    return ans
  }
};

console.log(isValid(""))