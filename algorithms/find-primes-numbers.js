function getPrimes(num) {
  const resheto = []
  const primes = []

  for (let i = 2; i <= num; i++) {
    if (!resheto[i]) {
      primes.push(i)

      for (let j = i * i; j <= num; j += i) {
        resheto[j] = true
      }
    }
  }

  return primes
}

console.log(getPrimes(120))