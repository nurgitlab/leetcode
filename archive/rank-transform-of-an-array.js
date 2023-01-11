const arrayRankTransform = function (arr) {
  let set = new Set()
  arr.forEach(el => {
    set.add(el)
  })
  let arrWithIndex = [...set].map((el, i) => [el, i + 1])
  arrWithIndex.sort((a, b) => (a[0] - b[0]))
  let mem = {}
  arrWithIndex.forEach((el, i) => {
    el[1] = i + 1
    mem[el[0]] = i+1
  })

  arr.forEach((el, i) => {
    arr[i] = mem[el]
  })
  return arr
};

console.log(arrayRankTransform([40, 10, 20, 30, 40, 40]))