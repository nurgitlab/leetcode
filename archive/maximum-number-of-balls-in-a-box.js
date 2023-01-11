const countBalls = function(lowLimit, highLimit) {
  let mem = {}
  let max = -Infinity
  for (let i = lowLimit; i<= highLimit; i++) {
    if (mem[sumOfDigits(i)] === undefined) {
      mem[sumOfDigits(i)] = 0
    }
    mem[sumOfDigits(i)]++
    max = Math.max(mem[sumOfDigits(i)], max)
  }

  return max
}

function sumOfDigits (el) {
  let ans = 0
  String(el).split('').forEach(c => {
    ans+=Number(c)
  })

  return ans
}

console.log(countBalls(5, 15))