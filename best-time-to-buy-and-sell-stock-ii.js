const maxProfit = function(prices) {
  let ans = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      ans+=prices[i + 1]-prices[i]
    }
  }

  return ans
}