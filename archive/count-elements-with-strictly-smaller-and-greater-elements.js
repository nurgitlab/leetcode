const countElements = function (nums) {
  let min = Infinity
  let max = -Infinity

  nums.forEach(el => {
    min = Math.min(el, min)
    max = Math.max(el, max)
  })

  let ans = 0

  nums.forEach(el => {
    if (el > min && el < max) {
      ans++
    }
  })

  return ans
}

console.log(countElements([-51,-81,-47,10,-61,-33,45]))