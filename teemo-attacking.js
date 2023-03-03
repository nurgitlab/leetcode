/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
  let ans = 0
  for (let i = 0; i < timeSeries.length; i++) {
    if (i === timeSeries.length - 1) {
      ans+=duration
    } else {
      ans+=Math.min(duration, timeSeries[i + 1] - timeSeries[i])
    }
  }

  return ans
}