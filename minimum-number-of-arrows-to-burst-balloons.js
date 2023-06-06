/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a,b) => a[1] - b[1])
  //1-6 2-8 7-12 10-16
  let prev = points[0], ans = 1
  for (let i = 1; i < points.length; i++) {
    if (prev[1] >= points[i][0]) {
      continue
    } else {
      ans++
      prev = points[i]
    }
  }

  return ans
}