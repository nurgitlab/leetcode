var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let sum = 0

  while (left < right) {
    sum = maxOf(
      (right - left) * minOf(
        height[left],
        height[right]
      ),
      sum
    )

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return sum
};

function minOf(a, b) {
  if (a < b) {
    return a
  } else {
    return b
  }
}

function maxOf(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}


console.log(maxArea([1, 3, 2, 5, 25, 24, 5]))