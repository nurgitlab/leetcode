const uncommonFromSentences = function (s1, s2) {
  let ds1mem = toMem(s1)
  let ds2mem = toMem(s2)
  s1 = new Set(s1.split(' '))
  s2 = new Set(s2.split(' '))
  let ans = []

  let arr1 = [...s1]
  arr1.forEach(el => {
    if (!(s2.has(el)) && ds1mem[el] === 1) {
      ans.push(el)
    }
  })

  let arr2 = [...s2]
  arr2.forEach(el => {
    if (!(s1.has(el)) && ds2mem[el] === 1) {
      ans.push(el)
    }
  })

  return ans.filter(el => el.length > 0)
}

function toMem(str) {
  str = str.split(' ')
  let mem = {}
  str.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 0
    }
    mem[el]++
  })

  return mem
}

console.log(uncommonFromSentences("s z z z s", "s z ejt"))