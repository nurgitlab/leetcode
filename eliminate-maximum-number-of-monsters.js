/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
  let m = dist.map((d, i) => d / speed[i]).sort((a, b) => a - b)

  for (let i = 0; i < m.length; i++) if (m[i] <= i) return i

  return m.length
};