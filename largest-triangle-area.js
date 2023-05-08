/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let max = -Infinity
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        max = Math.max(max, area(
          points[i],
          points[j],
          points[k]
        ))
      }
    }
  }

  return max
};

function area ([x1,y1], [x2,y2], [x3,y3]) {
  return Math.abs((x2 - x1)*(y3-y1) - (x3-x1)*(y2-y1))/2
}