const nextGreaterElement = function (nums1, nums2) {
  let mem = {}
  let set = new Set()

  for (let i = 0; i < nums2.length; i++) {
    if (set.size > 0) {
      let sa = [...set]
      for (let j = 0; j < sa.length; j++) {
        if (sa[j] < nums2[i]) {
          mem[sa[j]] = nums2[i]
          set.delete(sa[j])
        }
      }
    }
    set.add(nums2[i])
  }

  [...set].forEach(el => {
    mem[el] = -1
  })
  let ans = nums1.map(el => mem[el])
  return ans
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))