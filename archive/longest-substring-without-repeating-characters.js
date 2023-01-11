var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length
  }
  let mem = {}
  let ans = 1

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (mem[s[j]] === undefined) {
        mem[s[j]] = 1
      } else {
        if (Object.keys(mem).length > ans) {
          ans = Object.keys(mem).length
        }
        mem = {}
        break
      }
    }
  }

  return ans
};

console.log(lengthOfLongestSubstring('a'))