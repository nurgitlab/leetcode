const findSpecialInteger = function(arr) {
  const n = arr.length
  let mem = {}

  for (let i = 0; i < n; i++) {
    if (mem[arr[i]]===undefined) {
      mem[arr[i]] = 1
    } else {
      mem[arr[i]]++
    }
  }

  console.log(mem)

  let ans = null
  let cor = n / 4
  Object.keys(mem).forEach(k => {
    let c = mem[k]
    if (c>=cor) {
      ans = k
    }
  })

  return ans
};

console.log(findSpecialInteger([5668,5668,5668,5668,22011]))