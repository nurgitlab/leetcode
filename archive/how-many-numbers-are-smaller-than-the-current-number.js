var smallerNumbersThanCurrent = function (nums) {
  let mem = {}

  nums.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })
  let memArr = []
  Object.keys(mem).forEach(k => {
    memArr.push([Number(k), mem[k]])
  })

  let memVal = 0
  for (let i = 0; i < memArr.length; i++) {
    if (i === 0) {
      memVal = memArr[i][1]
      memArr[i][1] = 0
      continue
    }
    let mem = memArr[i][1]
    memArr[i][1] = memArr[i - 1][1] + memVal
    memVal = mem
  }

  memArr.forEach(el => {
    mem[el[0]] = el[1]
  })

  nums.forEach((el, index) => {
    nums[index] = mem[el]
  })

  return nums
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))