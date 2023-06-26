/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.arr = []
  this.s = maxSize

  return null
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.arr.length < this.s) this.arr.push(x)

  return null
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.arr.length > 0) return this.arr.pop()

  return -1
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < Math.min(k, this.arr.length); i++) {
    this.arr[i]+=val
  }

  return null
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */