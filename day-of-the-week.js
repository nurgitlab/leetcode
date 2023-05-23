/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const dayOfTheWeek = function(day, month, year) {
  let r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let d = 0

  let [y, m, _] = [1970, 1, 1] //thursday

  while (y < year) {
    d+=365
    if (isVic(y)) {
      d+=1
    }
    y++
  }

  while (m < month) {
    d+=r[m - 1]
    if (isVic(y) && m === 2) {
      d+=1
    }
    m++
  }

  d+=day - 1

  d%=7

  let week = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]

  return week[d]
}

function isVic (y) {
  if (y % 400 === 0) return true
  if (y % 100 === 0) return false
  if (y % 4 === 0) return true

  return false
}