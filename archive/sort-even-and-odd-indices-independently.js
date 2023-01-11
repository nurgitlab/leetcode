const sortEvenOdd = function(nums) {
  let sled = []
  let c1 = []
  let c2 = []

  nums.forEach((n,i) => {
    if (i % 2 === 0) {
      sled.push(true)
      c1.push(n)
    } else {
      sled.push(false)
      c2.push(n)
    }
  })
  let k = 0
  let l = 0

  c1 = c1.sort((a,b) => a - b)
  c2 = c2.sort((a,b) => b - a)

  sled.forEach((b, i) => {
    if (b) {
      sled[i] = c1[k]
      k++
    } else {
      sled[i] = c2[l]
      l++
    }
  })

  return sled
};

console.log(sortEvenOdd([36,45,32,31,15,41,9,46,36,6,15,16,33,26,27,31,44,34]))