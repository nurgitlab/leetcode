/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
  let [s1, s2] = [start, target].map(str => str.split('').filter(el => el !== '_').join(''))

  if (s1 !== s2) return false

  let [l1, l2, l3, l4] = [-1, -1, -1, -1]
  let [r1, r2, r3, r4] = [-1, -1, -1, -1]

  for (i = 0; i < start.length; i++) {
    if (start[i] === 'L') {
      if (l1 === -1) {l1 = i}
      l2 = i
    }

    if (target[i] === 'L') {
      if (l3 === -1) {l3 = i}
      l4 = i
    }

    if (start[i] === 'R') {
      if (r1 === -1) {r1 = i}
      r2 = i
    }

    if (target[i] === 'R') {
      if (r3 === -1) {r3 = i}
      r4 = i
    }
  }

  while (l1 > l3 && start[l1 - 1] === '_') l1--
  while (r2 < r4 && start[r2 + 1] === '_') r2++

  if (l1 !== -1) {
    if (l1 < l3) return false
    if (l2 < l4) return false
  }

  if (r1 !== -1) {
    if (r1 > r3) return false
    if (r2 > r4) return false
  }

  return true
};