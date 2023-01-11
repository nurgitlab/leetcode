const divisorSubstrings = function (num, k) {
  let arr = String(num).split('')
  let mem = []
  for (let i = 0; i < arr.length - k + 1; i++) {
    let localMem = ''
    for (let j = i; j < i + k; j++) {
      localMem += arr[j]
    }
    mem.push(Number(localMem))
  }
  let ans = 0
  mem.forEach(el => {
    if (el !== 0) {
      if (num % el === 0) {
        ans++
      }
    }
  })

  return ans
};

console.log(divisorSubstrings(430043, 2))