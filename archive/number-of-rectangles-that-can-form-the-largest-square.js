const countGoodRectangles = function (rectangles) {
  let max = -Infinity
  let ans = 0

  rectangles.forEach(el => {
    max = Math.max(max, Math.min(el[0], el[1]))
  })

  rectangles.forEach(el => {
    if (max === Math.min(el[0], el[1])) {
      ans++
    }
  })

  return ans
}

console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]))