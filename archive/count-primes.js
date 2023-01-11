const countPrimes = function (num) {
  const resheto = []
  const primes = []

  for (let i = 2; i < num; i++) {
    if (!resheto[i]) {
      primes.push(i)

      for (let j = i * i; j <= num; j+=i) {
        resheto[j] = true
      }
    }
  }

  return primes.length
}

console.log(countPrimes(15))