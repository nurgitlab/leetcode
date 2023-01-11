const maxScore = function (cardPoints, k) {
  let s1 = [0]
  let sum1 = 0
  let sum2 = 0
  let s2 = [0]
  for (let i = 0; i < k; i++) {
    sum1 += cardPoints[i]
    sum2 += cardPoints[cardPoints.length - 1 - i]
    s1.push(sum1)
    s2.push(sum2)
  }
  let sum = 0
  for (let i = 0; i <= k; i++) {
    sum = Math.max(sum, Math.abs(s1[i] + s2[s2.length - 1 - i]))
  }

  return sum
}

console.log(maxScore([100,40,17,9,73,75], 3))