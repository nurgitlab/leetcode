const minCostToMoveChips = function (position) {
  let d1 = 0
  let d2 = 0
  position.forEach(el => {
    if (el % 2 === 0) {
      d1++
    } else {
      d2++
    }
  })

  return Math.min(d1, d2)
}

console.log(minCostToMoveChips([1,2,3]))