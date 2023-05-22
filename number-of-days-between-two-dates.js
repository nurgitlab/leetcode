/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */


var daysBetweenDates = function(date1, date2) {
  //mod 4 === 0 && mod % 400 === 0 && mod 100 !== 0

  let r1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let r2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  let [y1, m1, d1] = date1.split('-').map(el => Number(el))
  let [y2, m2, d2] = date2.split('-').map(el => Number(el))



  function g(y3, m3, d3) {
    let[y0, m0, d0] = [1970, 1, 1]
    let a = 0

    while (y0 < y3) {
      if (isVicYear(y0)) {
        a+=366
      } else {
        a+=365
      }
      y0++
    }

    while (m0 < m3) {
      if (isVicYear(y0) && m0 === 2) {
        a+=1
      }
      a+=r1[m0 - 1]

      m0++
    }

    a+=d3 - d0

    return a
  }

  let [a1, a2] = [g(y1,m1,d1), g(y2,m2,d2)]

  return Math.abs(a1 - a2)
}

function isVicYear (y) {
  if (y % 400 === 0) {return true}
  if (y % 100 === 0) {return false}
  if (y % 4 === 0) {return true}
}