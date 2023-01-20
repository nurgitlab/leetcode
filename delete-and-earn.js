const deleteAndEarn = function(nums) {
  if (nums.length === 0) {return 0}
  if (nums.length === 1) {return nums[0]}
  if (nums.length === 2) {
    if (Math.abs(nums[0] - nums[1]) === 1) {
      return Math.max(nums[0], nums[1])
    } else {
      return nums[0] + nums[1]
    }
  }
  let mem = {}
  nums.forEach(n => {
    if (mem[n] === undefined) {mem[n] = 0}
    mem[n]++
  })

  let arr = []



  Object.keys(mem).forEach(k => {
    arr.push([Number(k), mem[k]])
  })

  arr.sort((a,b) => a[0] - b[0])
  console.log(arr)

  if (arr.length === 1) {
    return arr[0][0]*arr[0][1]
  }
  let lastMax = 0
  let isPrevElMax = false
  let prevMax = 0
  for (let i = 0; i < arr.length; i++) {
    console.log(prevMax, lastMax)
    arr[i][1]*=arr[i][0]
    if (arr[i - 1]!== undefined) {
      if (arr[i - 1][0] + 1 === arr[i][0]) {
        arr[i][1]+=isPrevElMax ? prevMax : lastMax
      } else {
        arr[i][1]+=lastMax
      }
    }

    if (lastMax < arr[i][1]) {
      isPrevElMax = true
      prevMax = lastMax
      lastMax = arr[i][1]
    } else {
      if (arr[i][1] > prevMax) {
        prevMax = arr[i][1]
      }
      isPrevElMax = false
    }

  }

  console.log(arr)
  return Math.max(arr[arr.length - 1][1], arr[arr.length - 2][1])
}

console.log(deleteAndEarn([1, 1, 1]))