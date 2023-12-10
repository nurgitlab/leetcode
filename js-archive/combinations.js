const combine = function(n, k) {
  let set = new Set()
  let m = []

  for (let i = 1; i <= n; i++) {
    m.push(i)
  }

  let mem = new Set()
  function rec(arr) {
    if (arr.length === k) {
      console.log(arr)
      set.add(arr.join('-'))
    } else {
      for (let i = 0; i < arr.length; i++){
        let copy = [...[...arr].slice(0,i), ...[...arr].slice(i+1)]
        if (!mem.has(copy.join('-'))) {
          mem.add(copy.join('-'))
          rec(copy)
        }
      }
    }
  }

  rec(m)

  let ans = [...set].map(el => el.split('-'))
  console.log(set)

  return ans
}