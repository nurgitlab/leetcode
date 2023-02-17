/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
const haveConflict = function (event1, event2) {
  event1 = event1.map(el => toAbsoluteTime(el))
  event2 = event2.map(el => toAbsoluteTime(el))

  let [a, b] = event1
  let [c, d] = event2

  if ((a >= c && a <= d) || (b >= c && b <= d)) {
    return true
  }
  a = event2[0]
  b = event2[1]

  c = event1[0]
  d = event1[1
    ]
  if ((a >= c && a <= d) || (b >= c && b <= d)) {
    return true
  }
  return false
}

function toAbsoluteTime(str) {
  let [h, m] = str.split(':')
  h = Number(h)
  m = Number(m)

  return h * 60 + m
}