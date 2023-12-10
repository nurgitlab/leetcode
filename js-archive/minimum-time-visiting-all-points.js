const minTimeToVisitAllPoints = function (points) {
  let ans = 0
  for (let i = 0; i < points.length - 1; i++) {
    let dx = Math.abs(points[i][0] - points[i + 1][0])
    let dy = Math.abs(points[i][1] - points[i + 1][1])

    let d = Math.min(dx, dy)

    ans += d + (dx - d) + (dy - d)
  }

  return ans
};

console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]))