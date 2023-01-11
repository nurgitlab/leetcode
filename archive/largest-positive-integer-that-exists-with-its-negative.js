const findMaxK = function(nums) {
  let negative = new Set()
  let mem = {}
  nums.forEach(el => {
    if (el < 0) {
      negative.add(el)
      if (mem[-el]!==undefined) {
        mem[-el] = true
      }
    } else {
      if (mem[el] === undefined) {
        mem[el] = false
      }

      if (negative.has(-el) ){
        mem[el] = true
      }
    }
  })

  let max = -1

  Object.keys(mem).forEach(k => {
    if (mem[k]) {
      max = Math.max(max, Number(k))
    }
  })

  return max
}

console.log(findMaxK([-1,10,6,7,-7,1]))