/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let [x, y, matrix, direction] = [0, 0, [], 0]

  let directions = [
    [0, 1], // ->
    [1, 0], //down
    [0, -1], //<-
    [-1, 0] //up
  ]

  for (let i = 0; i < n; i++) {
    matrix.push([])
  }

  for (let i = 1; i <= n * n; i++) {
    matrix[x][y] = i
    let [x1, y1] = directions[direction % 4]

    if (canMove(x + x1, y + y1, n)) {
      if (matrix[x + x1][y + y1]) {
        direction++
        [x1, y1] = directions[direction % 4]
      }
    } else {
      direction++
      [x1, y1] = directions[direction % 4]
    }

    [x, y] = [x + x1, y + y1]
  }

  return matrix
};

function canMove(x, y, n) {
  if (x < n && y < n && 0 <= x && 0 <= y) {return true}

  return false
}