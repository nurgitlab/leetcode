var intersection = function (nums1, nums2) {
  let set1 = new Set()
  let set2 = new Set()
  nums1.forEach(el => {
    set1.add(el)
  })
  nums2.forEach(el => {
    if (set1.has(el)) {
      set2.add(el)
    }
  })

  return [...set2]
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))