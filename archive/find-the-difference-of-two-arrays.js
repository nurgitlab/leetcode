const findDifference = function(nums1, nums2) {
  let mem1 = []
  let mem2 = []

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      continue
    } else {
      if (!mem1.includes(nums1[i])) {
        mem1.push(nums1[i])
      }
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      continue
    } else {
      if (!mem2.includes(nums2[i])) {
        mem2.push(nums2[i])
      }
    }
  }
  return [mem1, mem2]
};

console.log(findDifference([1,2,3, 3], [2,4,6]))