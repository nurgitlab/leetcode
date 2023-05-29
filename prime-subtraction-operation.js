/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
  let primes = getPrimes(Math.max(...nums))

  for (let i = nums.length - 1; i > 0; i--) {
    console.log(nums)
    if (nums[i] > nums[i - 1]) continue
    let isFind = false
    for (let j = 0; j < primes.length; j++) {
      if (nums[i - 1] - primes[j] < nums[i] && nums[i - 1] - primes[j] >= 1) {
        nums[i - 1]-=primes[j]
        isFind = true
        break
      }
    }
    console.log(isFind)
    if (isFind) continue

    return false
  }

  return true
}

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