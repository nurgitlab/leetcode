const distributeCandies = function (candyType) {
  let set = new Set(candyType)
  let arr = [...set].sort((a, b) => b - a)

  return Math.min(Math.floor(candyType.length / 2), set.size)
}

console.log(distributeCandies( [1,1,2,3]))