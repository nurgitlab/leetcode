
var MapSum = function() {
  this.mem = {}

  return null
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.mem[key] = val

  return null
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let sum = 0

  Object.keys(this.mem).forEach(k => {
    if (prefix.length > k.length) return;

    let isOk = true
    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i] === k[i]) {continue} else {
        isOk = false
        break
      }
    }

    if (isOk) sum+=this.mem[k]
  })

  return sum
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */