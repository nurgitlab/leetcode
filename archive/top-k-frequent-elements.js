const topKFrequent = function(nums, k) {
  let mem = new Map
  nums.forEach(el => {
    if (mem[el] === undefined) {
      mem[el] = 1
    } else {
      mem[el]++
    }
  })
  let arr = []
  Object.keys(mem).forEach(k => {
    arr.push([Number(k), mem[k]])
  })
  let z = arr.sort((a,b) => (a[1] - b[1])).slice(arr.length - k).map(el => el[0])
  return z
};

console.log(topKFrequent([3,2,2,1,1,1], 2))