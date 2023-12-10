const relativeSortArray = function (arr1, arr2) {
  const mem = {}
  arr2.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 0
    }
  })

  arr1.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })

  let ans = []

  arr2.forEach(el => {
    for (let i = 0; i < Number(mem[el]); i++) {
      ans.push(el)
    }
    delete mem[el]
  })

  Object.keys(mem).forEach(k => {
    for (let i = 0; i < Number(mem[k]); i++) {
      ans.push(Number(k))
    }
  })

  return ans
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))