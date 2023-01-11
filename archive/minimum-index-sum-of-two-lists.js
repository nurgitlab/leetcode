const findRestaurant = function(list1, list2) {
  let mem = {}
  list1.forEach((el, i) => {
    mem[el] = i
  })
  let ans = {}

  let rast = Infinity

  list2.forEach((el, i) => {
    if (mem[el] !== undefined) {
      ans[el] = Math.abs(mem[el] + i)
      rast = Math.min(rast, ans[el])
    }
  })

  let rAns = []

  Object.keys(ans).forEach(k => {
    if (ans[k] === rast) {rAns.push(k)}
  })

  return rAns
}

console.log(findRestaurant(
  ["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]
))