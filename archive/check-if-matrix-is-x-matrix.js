const checkXMatrix = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][i] !== 0 && grid[i][grid.length - 1 - i] !== 0) {
    } else {
      return false
    }

    for (let j = 0; j < grid[i].length; j++) {
      if (i === j || j === grid.length - 1 - i) {
        continue
      } else if (grid[i][j] !== 0) {
        return false
      }
    }
  }

  return true
};

console.log(checkXMatrix([[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]))