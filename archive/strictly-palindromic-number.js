const isStrictlyPalindromic = function (n) {
  if (n === 4) {
    return false
  }

  for (let i = 2; i <= n - 2; i++) {
    if (toBase(n, i)) {
      return false
    }
  }

  return true
}

function toBase(num, base) {
  let ans = ''
  while (num > 0) {
    ans += num % base
    num = (num - num % base) / base
  }
  return ans !== ans.split('').reverse().join('')
}

console.log(isStrictlyPalindromic(5))