/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let mem = {}
  nums.forEach((el, i) => {
    if (mem[el] === undefined) {
      mem[el] = []
    }

    mem[el].push(i)
  })

  let ans = []

  Object.entries(mem).forEach(([k,ids]) => {
    k = Number(k)
    if (mem[target - k]!==undefined) {
      if (target - k === k) {
        if (mem[k].length > 1) {
          ans = [...mem[k]]
        }
      } else {
        console.log('here')
        ans = [...mem[k], ...mem[target - k]]
      }
    }
  })

  return ans
}