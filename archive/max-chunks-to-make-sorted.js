const maxChunksToSorted = function(arr) {
  let a = [...arr]

  arr.sort((a,b) => a - b)

  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    ans+=1
    if (arr[i] === a[i]) {continue} else {
      let mem = {}

      mem[a[i]] = [true, false]
      mem[arr[i]] = [false, true]

      while (!all(mem)) {
        i++
        if (mem[a[i]] === undefined) {
          mem[a[i]] = [true, false]
        } else {
          mem[a[i]] = [true, mem[a[i]][1]]
        }

        if (mem[arr[i]] === undefined) {
          mem[arr[i]] = [false, true]
        } else {
          mem[arr[i]] = [mem[arr[i]][0], true]
        }
      }
    }
  }
  console.log(a, arr)

  return ans
}

function all (obj) {
  let ans = true

  Object.keys(obj).forEach(k => {
    let [a,b] = obj[k]

    if (!(a && b)) {ans = false}
  })

  return ans
}

console.log(maxChunksToSorted([4,3,2,1,0]))