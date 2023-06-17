/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  let set = new Set()

  circles.forEach(([x, y, r]) => {
    for (let i = x - r; i<= x + r; i++) {
      for (let j = y - r; j <= y + r; j++) {
        if (((x - i) ** 2 + (y - j) ** 2) <= r ** 2) {
          set.add(`${i}-${j}`)
        }
      }
    }
  })

  return set.size
}