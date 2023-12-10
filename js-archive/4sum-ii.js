var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let mem = {}, ans = 0

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let sum = nums1[i] + nums2[j]

      if (mem[sum] === undefined) mem[sum] = 0
      mem[sum]++
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let sum = nums3[i] + nums4[j]

      if (mem[-sum] !== undefined) ans+=mem[-sum]
    }
  }

  return ans
};