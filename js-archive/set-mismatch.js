/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let [mem, doubleVal, emptyVal] = [{}, 0, 0]

  for (let i = 0; i < nums.length; i++) {
    if (mem[i + 1] === undefined) {mem[i + 1] = 0}
    if (mem[nums[i]] === undefined) {mem[nums[i]] = 0}

    mem[nums[i]]++

    if (mem[nums[i]] === 2) {
      doubleVal = i
    }
  }

  Object.keys(mem).forEach(k => mem[k] === 0 ? emptyVal = Number(k) : _)

  return [nums[doubleVal], emptyVal]
}