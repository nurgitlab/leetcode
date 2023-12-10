const minOperations = function (boxes) {
  let ans = []
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0
    for (let j = 0; j < boxes.length; j++) {
      if (i === j) {
        continue
      } else {
        sum += boxes[j] * Math.abs(i - j)
      }
    }
    ans[i] = sum
  }
  return ans
}

console.log(minOperations("001011"))