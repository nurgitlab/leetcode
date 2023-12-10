const getCommon = function(nums1, nums2) {
  let set = new Set(nums1)

  let min = Infinity
  nums2.forEach(n => {
    if (set.has(n)) {
      min = Math.min(min, n)
    }
  })

  if (min === Infinity) {
    return -1
  }

  return min
}