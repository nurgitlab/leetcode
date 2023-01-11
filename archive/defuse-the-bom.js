const decrypt = function (code, k) {
  let defArr = [...code, ...code, ...code]
  let ans = []
  for (let i = code.length; i < code.length * 2; i++) {
    if (k === 0) {
      ans.push(0)
    } else if (k > 0) {
      let s = 0
      for (let j = 1; j <= k; j++) {
        s += defArr[i + j]
      }
      ans.push(s)
    } else {
      let s = 0
      for (let j = 1; j <= Math.abs(k); j++) {
        s += defArr[i - j]
      }
      ans.push(s)
    }
  }

  return ans
};

console.log(decrypt([2,4,9,3] ,-2))