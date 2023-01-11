const uniqueOccurrences = function(arr) {
  let mem = {}
  for (let i = 0; i < arr.length; i++) {
    if (mem[arr[i]] === undefined) {
      mem[arr[i]] = 1
    } else {
      mem[arr[i]]++
    }
  }
  let mem2 = []
  Object.keys(mem).forEach(k => {
    mem2.push(mem[k])
  })
  let set = new Set(mem2)

  return (set.size === mem2.length)
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))