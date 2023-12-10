const findKDistantIndices = function (nums, key, k) {
  const set = new Set()
  nums.forEach((el, i) => {
    if (el === key) {
      for (let j = Math.max(0, i - k); j <= Math.min(nums.length - 1, i + k); j++) {
        set.add(j)
      }
    }
  })

  return [...set]
}

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1))