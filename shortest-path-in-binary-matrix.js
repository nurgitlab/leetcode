/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  let valNodes = [[0, 0]]
  let visited = new Set() //i-j
  let ans;
  function isValid (x, y) {
    if (x >= 0 && x < grid.length) {
      if (y >= 0 && y < grid[x].length) {
        if (grid[x][y] === 0 && !visited.has(x + '-' + y)) return true
      }
    }

    return false
  }


  function rec(l) {
    let newNodes = []

    for (let i = 0; i < valNodes.length; i++) {
      let [x, y] = valNodes[i]

      if (grid[x][y] === 1) continue
      if (x === grid.length - 1 && y === grid[x].length - 1) {
        if (ans === undefined) {
          ans = l
        } else {
          ans = Math.min(ans, l)
        }
      }

      if (visited.has(x + '-' + y)) {
        continue
      } else {
        visited.add(x + '-' + y)
        if (isValid(x, y + 1)) {newNodes.push([x, y + 1])}
        if (isValid(x, y - 1)) {newNodes.push([x, y - 1])}
        if (isValid(x + 1, y)) {newNodes.push([x + 1, y])}
        if (isValid(x - 1, y)) {newNodes.push([x - 1, y])}

        if (isValid(x + 1, y + 1)) {newNodes.push([x + 1, y + 1])}
        if (isValid(x - 1, y - 1)) {newNodes.push([x - 1, y - 1])}
        if (isValid(x + 1, y - 1)) {newNodes.push([x + 1, y - 1])}
        if (isValid(x - 1, y + 1)) {newNodes.push([x - 1, y + 1])}
      }
    }
    console.log(l, newNodes)
    if (newNodes.length > 0) {
      valNodes = newNodes
      rec(l + 1)
    }
  }

  rec(1)

  return ans || -1
}