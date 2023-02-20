const xorOperation = function(n, start) {
  let arr = 0

  for (let i = 0; i < n; i++) {
    arr^=start + 2 * i
  }

  return arr
};