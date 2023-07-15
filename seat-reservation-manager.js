/**
 * @param {number} n
 */
var SeatManager = function(n) {
  this.free = Array(n).fill(0).map((_, i) => i + 1)
  this.unres = []
  this.s = 1
}

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
  let k
  if (this.unres.length === 0) {
    k = this.free[0]
    this.free.shift()
  } else {
    k = this.unres[0]
    this.unres.shift()
  }

  return k

}

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
  this.unres.push(seatNumber)
  this.unres.sort((a, b) => a - b)
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */