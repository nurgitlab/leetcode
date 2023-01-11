const maxDistance = function (colors) {
  let l = 0
  let r = colors.length - 1
  let ans = -1
  while (l < r) {
    if (colors[l] === colors[r]) {
      let k = l
      while (k < r) {
        if (colors[k] === colors[l]) {
          k++
        } else {
          break
        }
      }
      let mem1 = k - l
      k = r
      while (k > l) {
        if (colors[k] === colors[r]) {
          k--
        } else {
          break
        }
      }
      let mem2 = r - k
      if (mem1 < mem2) {
        l+=mem1
      } else {
        r-=mem2
      }
    } else {
      if (r - l > ans) {
        ans = r - l
      }
      r--
    }
  }


  return ans
};

console.log(maxDistance([6,6,6,6,6,6,6,6,6,19,19,6,6]))