/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
  return nums.reduce(([arr, max], el) => {
    max = Math.max(el, max)

    arr.push(el + max + (arr[arr.length - 1] || 0))

    return [arr, max]
  }, [[], -Infinity])[0]
};