const maxWidthOfVerticalArea = function(points) {
  points.sort(([x], [y]) => x - y)
  let ans = 0
  for (let i = 0; i < points.length - 1; i++) {
    ans = Math.max(ans, points[i + 1][0] - points[i][0])
  }

  return ans
}

console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]))