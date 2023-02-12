const numWaterBottles = function(numBottles, numExchange) {
  let empty = 0
  let ans = 0
  while (numBottles > 0) {
    ans+=numBottles
    empty += numBottles
    numBottles = 0
    numBottles = Math.floor(empty / numExchange)
    empty%=numExchange
  }

  return ans
}