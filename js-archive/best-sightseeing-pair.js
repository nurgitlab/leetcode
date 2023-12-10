const maxScoreSightseeingPair = function(values) {
  let max = 0

  for (let i = 0; i < values.length - 1; i++) {
    for (let j = i + 1; j < values.length; j++) {
      let score = values[i] + values[j] + i - j
      max = Math.max(max, score)
    }
  }

  return max
}