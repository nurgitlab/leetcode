/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
  //y = ax + b
  //y1 = ax1 + b
  //y2 = ax2 + b
  //y1 - y2 = a(x1 - x2)
  //a = (y1 - y2)/(x1 - x2)

  let [point1, point2] = coordinates

  let func = ''
  if (point1[0] !== point2[0]) {
    let a = (point1[1] - point2[1])/(point1[0] - point2[0])
    let b = point1[1] - a * point1[0]
    // func = 'y=' + a + '*x+' + b

    for (let i = 0; i < coordinates.length; i++) {
      let point = coordinates[i]
      if (point[1] !== a * point[0] + b) {
        return false
      }
    }
    return true
  } else {
    for (let i = 0; i < coordinates.length; i++) {
      let point = coordinates[i]
      if (point[0]!==point1[0]) {
        return false
      }
    }

    return true
  }

  console.log(func)
}