const maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b)

  let firstPositive = false

  let ans = 0

  for (let i = 0; i < satisfaction.length; i++) {
    if (!firstPositive) {
      if (satisfaction[i] >= 0) {
        firstPositive = true
      }

      let la = 0
      for (let j = i; j < satisfaction.length; j++) {
        la+=(j - i + 1) * satisfaction[j]
      }

      ans = Math.max(ans, la)
    } else break
  }
  return ans
}

console.log(maxSatisfaction([4,3,2]))