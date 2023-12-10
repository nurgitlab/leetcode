/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  let ans = {}

  this.forEach(el => {
    let res = fn(el)

    if (ans[res] === undefined) {ans[res] = []}

    ans[res].push(el)
  })

  return ans
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */