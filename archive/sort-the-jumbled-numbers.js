const sortJumbled = function(mapping, nums) {
  let mem = {}

  nums.forEach((el, i) => mem[el] = i)
  nums = nums.map(el => {
    let s = String(el).split('')
    s = s.map(l => String(mapping[Number(l)]))

    return [el, Number(s.join(''))]
  })

  nums.sort((a,b) => {
    if (a[1] === b[1]) {
      return mem[a[0]] - mem[b[0]]
    } else {
      return a[1] - b[1]
    }
  })
  return nums.map(el => el[0])
}

console.log(sortJumbled([8,9,4,0,2,1,3,5,7,6], [991,338,38]))