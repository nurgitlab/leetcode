/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  let mem = {}

  nums.forEach((el, i) => {
    if (mem[el] === undefined) {
      mem[el] = []
    }

    mem[el].push(i)
  })

  console.log(mem)

  let ans = 0
  nums.forEach((el, i) => {
    let [c1, c2] = [target.slice(0, target.length - el.length), target.slice(target.length - el.length)]
    console.log(c1, el)
    if (c1 + el === target) {
      ans+=mem[el].length
    }
  })

  return ans
};