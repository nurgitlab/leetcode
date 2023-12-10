const findRepeatedDnaSequences = function (s) {
  let mem = {}
  for (let i = 0; i <= s.length - 10; i++) {
    let localStr = ''
    for (let j = i; j < i + 10; j++) {
      localStr += s[j]
    }

    if (mem[localStr] === undefined) {
      mem[localStr] = 1
    } else {
      mem[localStr] += 1
    }
  }

  let ans = []

  Object.keys(mem).forEach(str => {
    if (mem[str] > 1) {
      ans.push(str)
    }
  })

  return ans
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAA"))