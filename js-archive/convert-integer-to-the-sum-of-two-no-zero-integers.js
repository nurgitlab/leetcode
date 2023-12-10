const getNoZeroIntegers = function (n) {
  let ans
  for (let i = 1; i < n; i++) {
    let a = i
    let b = n - i

    let arrA = String(a).split('')
    let arrB = String(b).split('')

    if (arrA.includes('0') || arrB.includes('0')) {
      continue
    } else {
      ans = [a, b]
      break
    }
  }

  return ans
};

console.log(getNoZeroIntegers(11))