const heightChecker = function(heights) {

  let memHeights = [...heights]
  heights.sort((a,b) => a-b)
  let ans = 0
  for (let i = 0; i < memHeights.length; i++) {
    if (memHeights[i]!==heights[i]) {ans++}
  }

  return ans
};

console.log(heightChecker([1,1,4,2,1,3]))