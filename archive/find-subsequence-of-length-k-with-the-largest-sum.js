const maxSubsequence = function (nums, k) {
  let sum = []
  while (k > 0) {
    let maxEl = [-Infinity, -1]
    nums.forEach((el, i) => {
      if (el > maxEl[0]) {
        maxEl[0] = el
        maxEl[1] = i
      }
    })
    sum.push([maxEl[0], maxEl[1]])
    nums[maxEl[1]] = -Infinity
    k--
  }
  sum.sort((a,b)=>{
    if (a[1] > b[1]) {
      return 1
    } else {
      return  -1
    }
  })
  let ans = []

  sum.forEach(el => {
    ans.push(el[0])
  })
  return ans
};

console.log(maxSubsequence([50,-75], 2))