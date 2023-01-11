const numberOfMatches = function(n) {
  let sum = 0
  while (n > 1) {
    if (n % 2 !== 0) {
      n++
      sum--
    }
    sum+=n/2
    n=n/2
  }

  return sum
}

console.log(numberOfMatches(14))