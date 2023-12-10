/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let acc = init
  nums.forEach(el => {
    acc = fn(acc, el)
  })

  return acc
};