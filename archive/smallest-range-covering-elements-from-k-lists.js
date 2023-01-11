const smallestRange = function(nums) {
  if (nums.length === 1) {
    let a = Infinity
    let r = []
    if (nums[0].length === 1) {
      return [nums[0][0], nums[0][0]]
    }
    for (let i = 0; i < nums[0].length - 1; i++) {
      if (a > nums[0][i+1] - nums[0][i]) {
        r = [nums[0][i], nums[0][i + 1]]
        a = nums[0][i+1] - nums[0][i]
      }
    }

    return r
  }

  let k = []

  nums.forEach(el => k.push(0))

  let mem = []

  let ans = []
  while (allK(k, nums)) {
    let min = Infinity
    let id = -1

    nums.forEach((el, i) => {
      if (k[i] < el.length) {
        if (el[k[i]] <= min) {
          min = el[k[i]]
          id = i
        }
      }
    })

    let [min1, max1] = [Infinity, -Infinity]
    nums.forEach((el, i) => {
      min1 = Math.min(el[Math.min(k[i], nums[i].length - 1)], min1)
      max1 = Math.max(el[Math.min(k[i], nums[i].length - 1)], max1)
    })

    mem.push([max1 - min1, [min1, max1]])
    ans.push(nums[id][k[id]])

    k[id]++
  }

  let mc = Infinity

  mem.forEach(el => mc = Math.min(mc, el[0]))
  mem = mem.filter(el => el[0] === mc).sort((a,b) => a[1][0] - b[1][0])

  return mem[0][1]
}

function allK (k, nums) {
  let ans = 0
  k.forEach((el, i) => {
    if (el >= nums[i].length) {ans++}
  })

  return !(ans === k.length)
}

console.log(smallestRange([[1,2,3]]))