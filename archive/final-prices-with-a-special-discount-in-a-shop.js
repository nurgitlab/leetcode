const finalPrices = function (prices) {
  for (let i = 0; i < prices.length; i++) {
    let localPrice = prices[i]
    for (let j = i; j < prices.length; j++) {
      if (i === j) {
        continue
      } else if (localPrice >= prices[j]) {
        localPrice-=prices[j]
        break
      }
    }
    prices[i] = localPrice
  }
  return prices
};