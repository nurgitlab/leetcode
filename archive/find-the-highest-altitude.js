const largestAltitude = function (gain) {
  let arr = [0]
  let max = 0
  gain.forEach(n => {
    arr.push(arr[arr.length - 1] + n)
    max = Math.max(max, arr[arr.length - 1])
  })

  return max
};

console.log(largestAltitude([-5, 1, 5, 0, -7]))