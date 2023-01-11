const countDistinctIntegers = function(nums) {
  let set = new Set(nums)

  nums.forEach(el => {
    el = Number(String(el).split('').reverse().join(''))
    set.add(el)
  })

  return set.size
}

console.log(countDistinctIntegers([1,13,10,12,31]))