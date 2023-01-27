const countOdds = function(low, high) {
  let ans = 0
  if (low%2 === 1 || high%2===1) {ans++}

  ans+=Math.floor((high - low)/2)

  return ans
}