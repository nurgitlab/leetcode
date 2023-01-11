var isAnagram = function (s, t) {
  let obj1 = arrToObj(s.split(''))
  let obj2 = arrToObj(t.split(''))

  return (String(Object.entries(obj1).sort((a, b) => {
    if (a[0] > b[0]) {
      return 1
    } else {
      return -1
    }
  })) === String(Object.entries(obj2).sort((a, b) => {
    if (a[0] > b[0]) {
      return 1
    } else {
      return -1
    }
  })))

};

let arrToObj = function (arr) {
  let ans = {}
  arr.forEach(el => {
    if (ans[el] === undefined) {
      ans[el] = 1
    } else {
      ans[el] += 1
    }
  })

  return ans
}

console.log(isAnagram("rat", "car"))