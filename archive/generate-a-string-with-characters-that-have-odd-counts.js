const generateTheString = function(n) {
  let ans = ''

  if (n % 2 === 0) {
    for (let i = 0; i < n-1; i++) {
      ans+='a'
    }
    ans+='b'
  } else {
    for (let i = 0; i < n; i++) {
      ans+='a'
    }
  }

  return ans
}

console.log(generateTheString(5))