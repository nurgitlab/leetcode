const checkDistances = function(s, distance) {
  let mem = {}
  for (let i = 0; i < s.length; i++) {
    if (mem[s[i]] === undefined) {
      mem[s[i]] = i + 1
    } else {
      mem[s[i]] = i - mem[s[i]]
    }
  }

  let alphabet = {}

  distance.forEach((el, i) => {
    alphabet[String.fromCharCode(i + 97)] = el
  })

  let ans = true

  Object.keys(mem).forEach(k => {
    if (mem[k] !== alphabet[k]) {
      ans = false
    }
  })

  return ans
}


console.log(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))