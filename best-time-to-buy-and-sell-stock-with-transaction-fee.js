/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let hold = -prices[0], sell = 0

  for (let i = 0; i < prices.length; i++) {
    let prev = sell

    sell = Math.max(sell, hold + prices[i] - fee)
    hold = Math.max(hold, sell - prices[i])
  }

  return Math.max(sell, hold)
}