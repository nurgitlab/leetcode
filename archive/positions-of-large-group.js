const largeGroupPositions = function(s) {
  let ans = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i+1] && s[i+1] === s[i+2]) {
      let mem = [i]
      let k = 0
      while (s[i] === s[i+k]) {
        k++
      }
      mem.push(k + i - 1)
      ans.push(mem)
      i+=k - 1
    }
  }

  return ans
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"))