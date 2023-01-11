const minPartitions = function(n) {
  n = n.split('')
  n = n.map(el => Number(el))

  let ans = 0
  for (let i = 0; i < n.length; i++) {
    let r = Math.max(n[i] - ans, 0)
    if (r > 0) {ans+=r}
  }
  return ans
};

console.log(minPartitions("27346209830709182346"))