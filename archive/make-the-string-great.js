const makeGood = function (s) {
  while (del(s) !== s) {
    s = del(s)
  }

  return s
}

function del(s) {
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (s[i].toLocaleLowerCase() === s[i + 1].toLowerCase() && s[i] !== s[i + 1]) {
        s[i] = ''
        s[i + 1] = ''
      }
    }

    if (i > 0) {
      if (s[i].toLocaleLowerCase() === s[i - 1].toLowerCase() && s[i] !== s[i - 1]) {
        s[i] = ''
        s[i - 1] = ''
      }
    }
  }
  return s.join('')
}

console.log(makeGood("abBAcC"))