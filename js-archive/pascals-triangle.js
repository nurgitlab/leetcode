var generate = function (numRows) {
  let ans = []
  for (let i = 0; i < numRows; i++) {
    if (ans.length === 0) {
      ans.push([1])
    } else {
      let loc = []
      let z = ans[ans.length - 1].length
      for (let j = 0; j <= z; j++) {
        let locSum = 0
        if (ans[ans.length - 1][j - 1] !== undefined) {
          locSum += ans[ans.length - 1][j - 1]
        }
        if (ans[ans.length - 1][j] !== undefined) {
          locSum += ans[ans.length - 1][j]
        }
        loc.push(locSum)
      }
      ans.push(loc)
    }
  }

  return ans
};

console.log(generate(2))