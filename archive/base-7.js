var convertToBase7 = function (num) {
  let ans = ''
  let znak = false

  function rec(n) {
    if (n === 0) {
    } else {
      ans += n % 7
      rec(Math.floor(n / 7))
    }
  }

  if (num < 0) {
    znak = true
    num = Math.abs(num)
  }
  rec(num)

  ans = ans.split('').reverse().join('')

  if (znak) {
    ans = '-' + ans
  }

  if (ans.length === 0) {
    return '0'
  } else {
    return ans
  }
};

console.log(convertToBase7(100))