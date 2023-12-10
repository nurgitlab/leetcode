/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval]
  let ans = [], g = false
  for (let i = 0; i < intervals.length; i++) {
    let [a, b] = intervals[i], [c, d] = newInterval

    if (b < c || a > d) {
      ans.push(intervals[i])
      continue
    }

    a = Math.min(a, c)
    g = true
    while (d >= (intervals[i + 1] && intervals[i + 1][0])) i++
    b = Math.max(d, intervals[i][1])

    ans.push([a, b])
  }

  if (!g) ans.push(newInterval)
  return ans.sort((a, b) => a[0] - b[0])
};