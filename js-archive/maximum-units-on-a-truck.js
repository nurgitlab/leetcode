const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])

  let ans = 0
  for (let i = 0; i < boxTypes.length; i++) {
    let min = Math.min(truckSize, boxTypes[i][0])
    ans += min * boxTypes[i][1]
    truckSize -= min
    if (truckSize <= 0) break
  }
  return ans
};

console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10))