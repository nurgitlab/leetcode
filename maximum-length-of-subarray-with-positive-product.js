const getMaxLen = function(nums) {
  let a = []
  let mem = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]!==0) {
      mem.push(nums[i])
    } else {
      a.push(mem)
      mem = []
    }
  }

  if (mem.length > 0) {a.push(mem)}

  a = a.filter(arr => arr.length > 0)

  console.log(a)

  let ans = 0
  a.forEach(arr => {
    let otrEl = 0
    arr.forEach(el => {
      if (el < 0) {otrEl++}
    })

    if (otrEl % 2 === 0) {
      ans = Math.max(ans, arr.length)
    } else {
      let firstId = -1
      let lastId = -1
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && firstId === -1) {
          firstId = i
        }
        if (arr[i] < 0) {
          lastId = i
        }
      }

      let a = arr.length - firstId - 1
      let b = lastId

      ans = Math.max(a,b,ans)
    }
  })

  return ans
};