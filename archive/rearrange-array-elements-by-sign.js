const rearrangeArray = function (nums) {
  let p = []
  let o = []
  nums.forEach(el => {
    if (el > 0) {
      p.push(el)
    } else {
      o.push(el)
    }
  })
  let ans = []
  for (let i = 0; i < p.length; i++) {
    ans.push(p[i])
    ans.push(o[i])
  }
  return ans
};

console.log(rearrangeArray([-1, 1]))