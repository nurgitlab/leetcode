const frequencySort = function(s) {
  let mem = {}

  s.split('').forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })

  let arr = []
  Object.keys(mem).forEach(k => {
    arr.push([k, mem[k]])
  })

  let ans = ''
  arr.sort((a,b) => a[1] -b[1]).reverse()

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i][1]; j++) {
      ans+=arr[i][0]
    }
  }
  return ans
};

console.log(frequencySort("Aabb"))