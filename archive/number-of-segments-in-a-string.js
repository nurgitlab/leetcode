const countSegments = function(s) {
  s = s.trim()

  if (s.length === 0) {return 0}

  let k = ''

  for (let i = 0; i < s.length; i++) {
    k+=s[i]
    while (s[i] === ' ' && s[i + 1]===s[i]) {
      i++
    }
  }

  return k.split(' ').length
};

console.log(countSegments("                              "))