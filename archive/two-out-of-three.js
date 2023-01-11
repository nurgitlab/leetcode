const twoOutOfThree = function (nums1, nums2, nums3) {
  const mem = {}

  nums1.forEach(num => {
    if (mem[num] === undefined) {
      mem[num] = [1, 0, 0]
    } else {
      mem[num][0]++
    }
  })

  nums2.forEach(num => {
    if (mem[num] === undefined) {
      mem[num] = [0, 1, 0]
    } else {
      mem[num][1]++
    }
  })

  nums3.forEach(num => {
    if (mem[num] === undefined) {
      mem[num] = [0, 0, 1]
    } else {
      mem[num][2]++
    }
  })
  let ans = []
  Object.keys(mem).forEach(k => {
    let numOfNulls = 0
    mem[k].forEach(el =>{
      if (el ===0) {numOfNulls++}
    })

    if (numOfNulls <= 1) {
      ans.push(Number(k))
    }
  })

  return ans
};

console.log(twoOutOfThree( [1,2,2],  [4,3,3], [5]))