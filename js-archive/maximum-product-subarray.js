const maxProduct = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let max = -Infinity

  function rec(arr) {
    let mem = []
    let lc = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        mem.push([0])
        if (lc.length > 0) {
          mem.push(lc)
          lc = []
        }
      } else {
        lc.push(arr[i])
      }
    }
    if (lc.length > 0) {
      mem.push(lc)
    }
    mem.forEach(a => {
      let otr = 0
      a.forEach(el => {
        if (el < 0) {
          otr++
        }
      })

      let p = 1
      a.forEach(el => p *= el)
      max = Math.max(p, max)


      if (otr % 2 !== 0) {
        for (let i = 0; i < a.length; i++) {
          let copy = [...a]

          if (a[i] < 0) {
            copy[i] = 0
            rec(copy)
          }
        }
      }
    })
  }

  rec(nums)

  return max
};