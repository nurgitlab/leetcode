const sumBase = function(n, k) {
  let s = ''
  while (n >= k) {
    s+=n%k
    n=Math.floor(n / k)
  }
  if (n !== 0) {
    s+=n
  }
  console.log(s)
  let sum = 0
  s = s.split('').forEach(el => sum+=Number(el))
  return sum
}