const merge = function (nums1, m, nums2, n) {
  let n1 = [...nums1]
  n1 = n1.slice(0, m)

  let i = 0
  let j = 0

  let ans = []
  while (i < m && j < n) {
    if (n1[i] < nums2[j]) {
      ans.push(n1[i])
      i++
    } else {
      ans.push(nums2[j])
      j++
    }
  }
  ans = [...ans, ...n1.slice(i), ...nums2.slice(j)]
  ans.forEach((el, i) => nums1[i] = el)
  return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))