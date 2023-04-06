/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
  let diag = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i][i]) {
      diag.add(nums[i][i])
    }

    if (nums[i][nums.length - i - 1]) {
      diag.add(nums[i][nums.length - i - 1])
    }
  }
  let ans = 0
  diag = [...diag].forEach(el => {
    if (el > ans && el > 1) {
      if (isPrime(el)) {
        ans = el
      }
    }
  })
  console.log(diag)


  return ans
};

function isPrime (num) {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}