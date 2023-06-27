var minNumberOperations = function(target) {
  target = [0, ...target]
  let ans = 0
  for (let i = 0; i < target.length - 1; i++) {
    if (target[i] <= target[i + 1]) {
      ans+=target[i + 1] - target[i]
    }
  }

  return ans
};
//3
//3