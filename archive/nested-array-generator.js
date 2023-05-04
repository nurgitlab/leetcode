/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
  let g = arr.flat(Infinity)
  let i = 0
  while(i < g.length) {
    yield g[i]
    i++
  }

  return true
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */