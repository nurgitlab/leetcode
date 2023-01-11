const complexNumberMultiply = function(num1, num2) {
  let n1 = num1.split('+')
  let n2 = num2.split('+')
  n1[0] = Number(n1[0])
  n1[1] = Number(n1[1].split('').filter(el => el!=='i').join(''))

  n2[0] = Number(n2[0])
  n2[1] = Number(n2[1].split('').filter(el => el!=='i').join(''))
  return [n1[0]*n2[0] - n1[1]*n2[1], n1[0]*n2[1] + n1[1]*n2[0]].join('+') + 'i'
}

console.log(complexNumberMultiply( "1+-1i",
"0+0i"))