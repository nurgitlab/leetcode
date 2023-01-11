var frequencySort = function(nums) {
  let mem = {}

  nums.forEach(el => {
    if (mem[el]===undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })

  let memArr = []

  Object.keys(mem).forEach(k => {
    memArr.push([Number(k), mem[k]])
  })

  memArr.sort((a,b) => {
    if (a[1]===b[1]) {
      if (a[0]>b[0]) {
        return -1
      } else {
        return 1
      }
    } else
    if (a[1] > b[1]) {
      return 1
    } else {
      return -1
    }
  })
  let ans = []

  for (let i of memArr) {
    for (let j = 0; j < i[1]; j++) {
      ans.push(i[0])
    }
  }

  return ans
};

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]))