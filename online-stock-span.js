var StockSpanner = function() {
  this.arr = []
  this.day = 0
  return null
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  while (price >= (this.arr.length > 0 ? this.arr.at(-1)[0] : Infinity)) this.arr.pop()

  let ans = this.arr.length === 0 ? this.day + 1 : this.day - this.arr.at(-1)[1]
  this.arr.push([price, this.day])

  this.day+=1
  return ans
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */