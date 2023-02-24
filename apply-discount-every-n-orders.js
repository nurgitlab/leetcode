/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
  this.n = n
  this.counter = n
  this.discount = discount
  this.products = {}
  products.forEach((pr, i) => {
    this.products[pr] = prices[i]
  })
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
  this.n-=1
  let totalPrice = product.reduce((sum, el, i) => {
    return sum + this.products[el] * amount[i]
  }, 0)
  console.log(totalPrice)
  if (this.n === 0) {
    this.n = this.counter
    return totalPrice * ((100 - this.discount)/100)
  } else {
    return totalPrice
  }
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */