/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = function(date) {
// 1	January	31
// 2	February	28 (29 in leap years)
// 3	March	31
// 4	April	30
// 5	May	31
// 6	June	30
// 7	July	31
// 8	August	31
// 9	September	30
// 10	October	31
// 11	November	30
// 12	December	31
  let md = {
    '0': 0,
    '1': 31,
    '2': 28,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31
  }

  let [y, m, d] = date.split('-')

  if (isVic(y)) {md['2'] = 29}
  console.log(md['2'])
  console.log(isVic(y))
  let ans = 0
  for (let i = 0; i < Number(m); i++) {
    ans+=md[i]
  }

  ans+=Number(d)

  return ans
}

// год, номер которого кратен 400, — високосный;
// остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// остальные годы, номер которых кратен 4, — високосные[5];
// все остальные годы — невисокосные.

function isVic (year) {
  if (year % 400 === 0) {return true}
  if (year % 100 === 0) {return false}
  if (year % 4 === 0) {return true}

  return false
}