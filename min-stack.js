var MinStack = function() {
  this.arr = []

  return null
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.arr = [...this.arr, val]

  return null
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop()
  return null
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = Infinity, minId = -1
  for (let i = 0; i < this.arr.length; i++) {
    if (min > this.arr[i]) {
      minId = i
      min = this.arr[i]
    }
  }


  return min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */