const destCity = function(paths) {
  let mem = {}
  let s = new Set()
  paths.forEach(arr => {
    s.add(arr[0])
    s.add(arr[1])
    mem[arr[0]] = arr[1]
  })
  let ans = ''
  s.forEach(city => {
    if (!(city in mem)) {
      ans = city
    }
  })
  return ans
};

console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))