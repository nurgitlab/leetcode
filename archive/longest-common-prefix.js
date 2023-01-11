var longestCommonPrefix = function (strs) {
  if (strs.length > 0) {
    let ans = ''
    let f = strs[0]
    for (let i = 0; i < f.length; i++) {
      let isOk = true
      for (let j = 0; j < strs.length - 1; j++) {
        if (strs[j][i] === strs[j + 1][i]) {
          isOk = true
        } else {
          isOk = false
          break
        }
      }
      if (isOk) {
        ans += f[i]
      } else {
        break
      }
    }

    return ans
  } else {
    return ""
  }
};

console.log(longestCommonPrefix(["reflower", "flow", "flight"]))