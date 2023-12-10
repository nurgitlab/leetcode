const maxArea = function(height) {
  let [l, r] = [0, height.length - 1]

  let max = 0

  while (l < r) {
    max = Math.max(max, (r - l) * Math.min(height[r], height[l]))

    if (height[l] > height[r]) {r--} else {l++}
  }

  return max
};