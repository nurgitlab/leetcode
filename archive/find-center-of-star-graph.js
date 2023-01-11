const findCenter = function(edges) {
  let mem = {}

  edges.forEach(arr => {
    for (let i = 0; i < 2; i++) {
      if (mem[arr[i]] === undefined) {
        mem[arr[i]] = 1
      } else {
        mem[arr[i]]++
      }
    }
  })

  let ans
  Object.keys(mem).forEach(k => {
    if (mem[k]===edges.length) {
      ans = Number(k)
    }
  })

  return ans
};

console.log(findCenter([[1,2],[2,3],[4,2]]))