/**
 * @param {number} size
 */
var Bitset = function(size) {
  let arr = Array(size).fill(0).map((_, i) => i)
  this.mem = {
    '0': new Set(arr),
    '1': new Set()
  }
  return null
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
  if (this.mem[1].has(idx)) return null
  this.mem[1].add(idx)
  this.mem[0].delete(idx)

  return null
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
  if (this.mem[0].has(idx)) return null
  this.mem[0].add(idx)
  this.mem[1].delete(idx)

  return null
}

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
  [this.mem[0], this.mem[1]] = [this.mem[1], this.mem[0]]
  return null
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
  return this.mem[0].size === 0
}

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
  return this.mem[1].size > 0
}

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
  return this.mem[1].size
}

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
  let ans = ''

  for (let i = 0; i < this.mem[0].size + this.mem[1].size; i++) {
    if (this.mem[0].has(i)) {ans+=0} else {ans+=1}
  }
  return ans
}

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */