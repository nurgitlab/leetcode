const customSortString = function(order, s) {
  const store = {}

  s.split('').forEach(l => {
    if (store[l] === undefined) {store[l] = 1} else {
      store[l]++
    }
  })

  let ans = ''

  order.split('').forEach(l => {
    if (store[l] !== undefined) {
      for (let i = 0; i < store[l]; i++) {
        ans+=l
      }
      store[l] = 0
    }
  })

  Object.keys(store).forEach(l => {
    for (let i = 0; i < store[l]; i++) {
      ans+=l
    }
  })

  return ans
}