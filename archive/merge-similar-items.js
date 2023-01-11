const mergeSimilarItems = function(items1, items2) {
  let mem = {}

  items2.forEach(el => {
    if (mem[el[0]]===undefined) {
      mem[el[0]] = el[1]
    }
  })

  items1.forEach((el) => {
    if (mem[el[0]]===undefined) {
      mem[el[0]] = el[1]
    } else {
      mem[el[0]]+=el[1]
    }
  })

  let ans = []

  Object.keys(mem).forEach(el => {
    ans.push([Number(el), mem[el]])
  })
  ans.sort((a,b) => a[0]-b[0])
  return ans
};

console.log(mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]]))