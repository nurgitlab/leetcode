const groupThePeople = function (groupSizes) {
  const mem = {}

  groupSizes.forEach((el, i) => {
    if (mem[el] === undefined) {
      mem[el] = []
    }
    mem[el].push(i)
  })

  let ans = []
  Object.keys(mem).forEach(k => {
    let a = []
    for (let i = 0; i < mem[k].length; i++) {
      a.push(mem[k][i])
      if (a.length === Number(k)) {
        ans.push(a)
        a = []
      }
    }

    if (a.length > 0) {
      ans.push(a)
    }
  })

  return ans
}

console.log(groupThePeople([2, 1, 3, 3, 3, 2]))