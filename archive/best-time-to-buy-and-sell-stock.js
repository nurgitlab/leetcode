var maxProfit = function (prices) {
  let min = prices[0]
  let sum = 0
  for (let pr of prices) {
    min = Math.min(pr, min)
    sum = Math.max((pr - min), sum)
  }

  return sum
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))