/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function(grid) {
  let ans = []
  for (let i = 0; i < grid[0].length; i++) {
    ans[i] = 1
    let start = i
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][start] === grid[j][start + grid[j][start]]) {
        start+=grid[j][start]

        if (j === grid.length - 1) {
          ans[i] = start
        }
      } else {
        ans[i] = -1
        break
      }
    }
  }

  return ans
}