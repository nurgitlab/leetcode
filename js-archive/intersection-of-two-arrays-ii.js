var intersect = function (nums1, nums2) {
  let o1 = retObj(nums1)
  let o2 = retObj(nums2)

  let ans = []

  Object.keys(o1).forEach(k => {
    if (o2[k] !== undefined) {
      let m = min(o1[k], o2[k])
      for (let j = 0; j < m; j++) {
        ans.push(k)
      }
    }
  })

  return ans
};

function min(n1, n2) {
  if (n1 < n2) {
    return n1
  } else {
    return n2
  }
}

function retObj(arr) {
  let obj = {}

  arr.forEach(l => {
    if (obj[l] === undefined) {
      obj[l] = 1
    } else {
      obj[l] += 1
    }
  })

  return obj
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))