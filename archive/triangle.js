const minimumTotal = function (triangle) {
  let ans = Infinity
  let mem = {}

  function rec(i, j, sum) {
    if (triangle.length > i) {
      if (triangle[i][j] !== undefined) {
        if (mem[`${i}-${j}`] === undefined) {
          mem[`${i}-${j}`] = Infinity
        }
        if (mem[`${i}-${j}`] > sum) {
          mem[`${i}-${j}`] = sum
          rec(i + 1, j, sum + triangle[i][j])
        }
      }
      if (triangle[i][j + 1] !== undefined) {
        if (mem[`${i}-${j + 1}`] === undefined) {
          mem[`${i}-${j + 1}`] = Infinity
        }

        if (mem[`${i}-${j + 1}`] > sum) {
          mem[`${i}-${j + 1}`] = sum
          rec(i + 1, j + 1, sum + triangle[i][j + 1])
        }
      }
    } else {
      console.log(sum)
      ans = Math.min(ans, sum)
    }
  }

  rec(0, 0, 0)

  return ans
}

console.log(minimumTotal([[-1], [-2, -3]]))