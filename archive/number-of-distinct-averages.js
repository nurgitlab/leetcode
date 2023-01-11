const distinctAverages = function(nums) {
  let set = new Set()
  while (nums.length > 0) {
    let min = Infinity
    let max = -Infinity

    let minIndex = -1
    let maxIndex = -1

    nums.forEach((el, i) => {
      if (el > max) {
        maxIndex = i
        max = el
      }

      if (el < min) {
        min = el
        minIndex = i
      }
    })

    nums = nums.filter((_, i) => i!==maxIndex && i!==minIndex)

    set.add((max + min) / 2)
  }

  return set.size
}

console.log(distinctAverages([1,100]))