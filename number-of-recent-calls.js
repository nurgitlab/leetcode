const RecentCounter = function() {
  this.mem = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.mem.push(t)
  this.mem = this.mem.filter(el => el >= (t - 3000))

  return this.mem.length
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */