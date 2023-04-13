/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.mem = [homepage]
  this.i = 0

  return null
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.mem = [...this.mem.slice(0,this.i + 1), url]
  this.i+=1

  return null
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.i-=steps
  this.i = Math.max(this.i, 0)
  return this.mem[this.i]
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.i+=steps
  this.i = Math.min(this.i, this.mem.length - 1)
  return this.mem[this.i]
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */