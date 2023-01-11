const multiply = function (num1, num2) {
  num1 = sameLength(num1, num2)[0]
  num2 = sameLength(num1, num2)[1]
  let nums = []
  let nulls = ''
  for (let i = num2.length - 1; i >= 0; i--) {
    nums.push(multiplyNumber(num1, num2[i]) + nulls)

    nulls+='0'
  }

  let total = '0'

  nums.forEach(el => {
    total = sum(total, el)
  })

  let ans = ''
  let ved = true
  for (let i = 0; i < total.length; i++) {
    if (ved && total[i] === '0') {continue} else {
      ved = false
      ans+=total[i]
    }
  }
  if (ans.length === 0) {ans = '0'}
  return ans
}

function multiplyNumber (n, k) {
  let ans = ''
  let mem = 0
  for (let i = n.length - 1; i >= 0; i--) {
    let c = Number(n[i]) * Number(k) + mem
    if (c > 9) {
      ans+=c % 10
      mem = Math.floor(c / 10)
    } else {
      ans+=c
      mem = 0
    }
  }

  if (mem > 0) {ans+=mem}

  return ans.split('').reverse().join('')
}

function sameLength(num1, num2) {
  let r = Math.abs(num1.length - num2.length)

  let s = ''

  for (let i = 0; i < r; i++) {
    s += '0'
  }

  if (num1.length > num2.length) {
    num2 = s + num2
  } else {
    num1 = s + num1
  }

  return [num1, num2]
}

function sum(n1, n2) {
  let ans = ''
  let mem = 0

  n1 = sameLength(n1, n2)[0]
  n2 = sameLength(n1, n2)[1]

  for (let i = n1.length - 1; i >= 0; i--) {
    let c = Number(n1[i]) + Number(n2[i]) + mem
    if (c > 9) {
      ans += c - 10
      mem = 1
    } else {
      ans += c
      mem = 0
    }
  }

  if (mem > 0) {
    ans+='1'
  }

  return ans.split('').reverse().join('')
}

console.log(multiply('123', '456'))