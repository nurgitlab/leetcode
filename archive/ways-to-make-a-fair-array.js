/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToMakeFair = function(nums) {
  let arr = [], a = 0, b = 0

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {a+=nums[i]} else {b+=nums[i]}
    arr.push([a, b])
  }
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    let [l1,l2] = arr[i - 1] || [0, 0]
    let [c1, c2] = arr[i]
    //l1 - чётное
    //l2 - нечётное

    //a - сумма чётных
    //b - сумма нечётных

    if (l1 + b - c2 === l2 + a - c1) ans++
  }

  return ans
}