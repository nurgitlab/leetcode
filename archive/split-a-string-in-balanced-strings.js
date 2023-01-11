const balancedStringSplit = function(s) {
  let ans = 0
  let balans = 0
  s.split('').forEach(l => {
    if (l === 'R') {balans+=1} else {balans-=1}
    if (balans === 0) {ans++}
  })

  return ans
}