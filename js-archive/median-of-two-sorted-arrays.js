const findMedianSortedArrays = function(nums1, nums2) {
  nums1 = [...nums1, ...nums2]

  nums1.sort((a, b) => a - b)


  if (nums1.length % 2 === 1) {
    return nums1[Math.floor(nums1.length/2)]
  }

  return (nums1[nums1.length/2-1] + nums1[nums1.length/2])/2
}