var addStrings = function (num1, num2) {
  const n1 = num1.length
  const n2 = num2.length
  if (n1 > n2) {
    for (let i = 0; i < n1 - n2; i++) {
      num2 = '0' + num2
    }
  } else {
    for (let i = 0; i < n2 - n1; i++) {
      num1 = '0' + num1
    }
  }
  let mem = 0
  let ans = ''
  for (let i = num1.length - 1; i >= 0; i--) {
    let sum = Number(num1[i]) + Number(num2[i]) + mem
    if (sum <= 9) {
      ans += sum
      mem = 0
    } else {
      ans += (sum % 10)
      mem = 1
    }
  }
  if (mem > 0) {
    ans += mem
  }

  return (ans.split('').reverse().join(''))
};

console.log(addStrings("11", "123"))