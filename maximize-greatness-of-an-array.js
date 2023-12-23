/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
  let sorted = nums.sort((a, b) => a - b)
  let i = 0, a = [], j = 0

  while (j < sorted.length) {
    if (sorted[i] < sorted[j]) {
      a.push(sorted[j])
      i++
      j++
    } else {
      j++
    }
  }

  return a.length
}