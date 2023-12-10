let permuteUnique = function (nums) {
  let memAns = new Set()

  let allCombs = function (numsArr, n) {
    if (n < 2) {
      let arr = numsArr.slice()
      memAns.add(String(arr))
    } else {
      for (let j = n - 1; j >= 0; j--) {
        if (numsArr[j] === numsArr[j - 1]) {
          continue
        }
        let mem = numsArr[j]
        numsArr[j] = numsArr[n - 1]
        numsArr[n - 1] = mem
        allCombs(numsArr, n - 1)
        mem = numsArr[j]
        numsArr[j] = numsArr[n - 1]
        numsArr[n - 1] = mem
      }
    }
  }

  allCombs(nums, nums.length)
  let ret = []
  memAns.forEach(el => {
    let a = el.split(',')
    let retArr = []
    for (let i = 0; i < a.length; i++) {
      retArr.push(Number(a[i]))
    }

    ret.push(retArr)
  })
  return ret
}


console.log(permuteUnique([1, 2, 3]))