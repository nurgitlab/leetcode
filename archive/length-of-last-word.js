var lengthOfLastWord = function (s) {
  let mem = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      mem = 0
    } else {
      mem++
    }

    if (mem > 0) {
      max = mem
    }
  }

  return max
};

console.log(lengthOfLastWord("Today is a nice day"))