const kidsWithCandies = function(candies, extraCandies) {
  let max = -Infinity
  candies.forEach(candie => max = Math.max(candie, max))
  let ans = candies.map(candie => {
    if (candie + extraCandies >= max) {
      return true
    } else {
      return false
    }
  })

  return ans
}

console.log(kidsWithCandies([2,3,5,1,3], 3))