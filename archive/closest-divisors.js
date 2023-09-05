/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
  let mem = [Infinity, -1, -1]

  function rec (k) {
    for (let i = 1; i <= Math.floor(Math.sqrt(k)) + 1; i++) {
      if (k % i === 0 && Math.abs(i - k/i) < mem[0]) {
        mem =  [
          Math.abs(i - k/i),
          i,
          k / i
        ]
      }
    }
  }

  rec(num + 1)
  rec(num + 2)

  return [mem[1], mem[2]]
};