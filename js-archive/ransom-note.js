var canConstruct = function (ransomNote, magazine) {
  let mObj = {}
  for (let i = 0; i < magazine.length; i++) {
    if (mObj[magazine[i]] === undefined) {
      mObj[magazine[i]] = 1
    } else {
      mObj[magazine[i]] += 1
    }
  }
  let ans = true
  for (let i = 0; i < ransomNote.length; i++) {
    if (mObj[ransomNote[i]] === undefined) {
      ans = false
      break
    } else {
      mObj[ransomNote[i]] -= 1
      if (mObj[ransomNote[i]] === 0) {
        delete mObj[ransomNote[i]]
      }
    }
  }

  return ans
};

console.log(canConstruct("aa", "aab"))