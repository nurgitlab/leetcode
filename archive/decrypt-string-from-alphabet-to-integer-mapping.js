var freqAlphabets = function (s) {
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      let num = s[i - 2] + s[i - 1]
      s[i] = numToLetter(Number(num))
      s[i - 1] = ''
      s[i - 2] = ''
    }
  }

  for (let i = 0; i < s.length; i++) {
    let n = Number(s[i])
    if (n===0 || isNaN(s[i])) continue
    s[i] = numToLetter(n)
  }

  return s.join('').toLowerCase()
};


const numToLetter = (num) => {
  return String.fromCharCode(64 + num)
}
console.log(freqAlphabets("1326#"))

