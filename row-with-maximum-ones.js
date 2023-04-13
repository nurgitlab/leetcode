/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let ans = [0, 0]

  mat.forEach((row, i) => {
    let val = row.reduce((sum, el) => el === 1 ? sum+=1 : sum,0)

    if (val > ans[1]) {
      ans = [i, val]
    }
  })

  return ans
};