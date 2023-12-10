var longestPalindrome = function (s) {
  let mem = {}
  s.split('').forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el] += 1
    }
  })
  let ans = 0
  let max = 0
  Object.keys(mem).forEach(k => {
    if (mem[k] % 2 === 0) {
      ans += mem[k]
    } else {
      max = 1
      ans += mem[k] - 1
    }
  })
  return (ans + max)
};

console.log(longestPalindrome("abccccdd"))