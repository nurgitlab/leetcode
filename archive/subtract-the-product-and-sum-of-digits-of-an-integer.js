const subtractProductAndSum = function(n) {
  n = String(n).split('')
  let p = 1
  let s = 0
  for (let i = 0; i < n.length; i++) {
    p*= Number(n[i])
    s+=Number(n[i])
  }

  return p - s
};

console.log(subtractProductAndSum(234))