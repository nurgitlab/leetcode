var groupAnagrams = function (strs) {
  let types = []
  for (let i = 0; i < strs.length; i++) {
    let mem = strs[i].split('').sort((a, b) => {
      if (`${a}` > `${b}`) {
        return 1
      } else {
        return -1
      }
    })

    types.push([strs[i], mem.join('')])
  }

  types.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1
    } else {
      return -1
    }
  })

  let prev
  let localAns = []
  let ansArr = []
  for (let i = 0; i < types.length; i++) {
    if (prev === types[i][1]) {
      localAns.push(types[i][0])
    } else {
      if (i > 0) {
        ansArr.push(localAns)
      }
      localAns = []
      localAns.push(types[i][0])
    }
    if (types.length - 1 === i) {
      ansArr.push(localAns)
    }
    prev = types[i][1]
  }

  return ansArr
};

console.log(groupAnagrams(["a"]))
