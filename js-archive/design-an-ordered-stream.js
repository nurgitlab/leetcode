var OrderedStream = function(n) {
  this.arr = []

  for (let i = 0; i < n; i++) {
    this.arr[i] = []
  }
  console.log(this.arr)

  return null
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  this.arr[idKey] = value
  return this.arr
};
