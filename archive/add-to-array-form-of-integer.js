const addToArrayForm = function (num, k) {
  k = String(k)

  for (let i = k.length; i < num.length; i++) {
    k = '0' + k
  }
  for (let i = num.length; i < k.length; i++) {
    num = [0, ...num]
  }

  k = k.split('')
  let ans = ''
  let reg = 0

  for (let i = k.length - 1; i >= 0; i--) {
    let sum = reg + Number(num[i]) + Number(k[i])
    if (sum > 9) {
      ans += sum % 10
      reg = 1
    } else {
      ans += sum
      reg = 0
    }
  }

  if (reg > 0) {ans+=1}

  ans = ans.split('').reverse()
  let r = ans.map(el => {
    return Number(el)
  })
  return r
};

console.log(addToArrayForm([2,7,4], 181))