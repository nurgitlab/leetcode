/**
 * @param {number} n
 * @return {Function} counter
 */

let c
var createCounter = function(n) {
  c = n - 1
  return function() {
    c+=1
    return c
  }
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */