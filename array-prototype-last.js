Array.prototype.last = function() {
  if (this[this.length - 1] !== undefined) {
    return this[this.length - 1]
  }
  return -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */