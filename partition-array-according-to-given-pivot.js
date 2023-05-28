/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  let [a1, a2, a3] = [[], [], []]

  nums.forEach(el => {
    if (el < pivot) {
      a1.push(el)
    }

    if (el === pivot) {
      a2.push(el)
    }

    if (el > pivot) {
      a3.push(el)
    }
  })

  return [...a1, ...a2, ...a3]
};