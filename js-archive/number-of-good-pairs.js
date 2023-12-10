const numIdenticalPairs = function (nums) {
  const mem = {}
  nums.forEach(n => {
    if (mem[n] === undefined) {
      mem[n] = 1
    } else {
      mem[n]++
    }
  })

  let ans = 0

  Object.keys(mem).forEach(k => {
    if (mem[k] >= 2) {
      ans += factorial(mem[k]) / (factorial(2) * factorial(mem[k] - 2))
    }
  })

  return ans
}

const factorialMem = {
  '0': 1,
  '1': 1,
  '2': 2,
  '3': 6
}

let maxInMem = 3

function factorial(n) {
  if (factorialMem[n] === undefined) {
    for (let i = maxInMem + 1; i <= n; i++) {
      factorialMem[i] = i * factorialMem[i - 1]
    }
    maxInMem = n
  }
  return factorialMem[n]
}

console.log(numIdenticalPairs([1, 2, 3]))