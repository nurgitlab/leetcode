const stringMatching = function(words) {
  let ans = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) continue
      if (words[j].split(words[i]).join('').length !== words[j].length) {
        ans.push(words[i])
        break
      }
    }
  }

  return ans
};

console.log(stringMatching(["leetcode","et","code"]))

