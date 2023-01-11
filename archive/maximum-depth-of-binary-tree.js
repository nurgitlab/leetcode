var maxDepth = function (root) {
  if (root.length === 0) {
    return 0
  }
  let i = 1
  let sum = 0
  let k = 0
  while (sum < root.length) {
    k++
    sum += i
    i *= 2
  }

  return k
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7]))