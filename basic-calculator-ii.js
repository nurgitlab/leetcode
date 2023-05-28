/**
 * @param {string} s
 * @return {number}
 */
let r = ['*', '/', '+', '-']

var calculate = function(s) {
  s = s.split('').filter(el => el !== ' ').join('')
  let str = []

  for (let i = 0; i < s.length; i++) {
    let num = ''

    while (!r.includes(s[i]) && i < s.length) {
      num+=s[i]
      i++
    }

    str.push(num)
    if (i < s.length) {
      str.push(s[i])
    }
  }

  let grouped = []

  for (let i = 0; i < str.length; i++) {
    let group = []

    while (i < str.length && str[i]!=='+' && str[i]!== '-') {
      group.push(str[i])
      i++
    }
    grouped.push(group)
    if (i < str.length) {
      grouped.push(str[i])
    }
  }
  grouped = grouped.map(el => {
    if (Array.isArray(el)) {
      return solve(el)
    }

    return el
  })
  console.log(grouped)
  return solve(grouped)
}

function solve (arr) {
  let ans = Number(arr[0])
  for (let i = 2; i < arr.length; i+=2) {
    arr[i] = Number(arr[i])
    if (arr[i - 1] === '*') {
      ans*=arr[i]
      continue
    }

    if (arr[i - 1] === '/') {
      ans = Math.floor(ans/arr[i])
      continue
    }

    if (arr[i - 1] === '+') {
      ans+=arr[i]
      continue
    }

    if (arr[i - 1] === '-') {
      ans-=arr[i]
      continue
    }
  }

  return ans
}