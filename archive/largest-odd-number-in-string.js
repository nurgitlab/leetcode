const largestOddNumber = function(num) {
  let arr = num.split('')
  for (let i = arr.length - 1; i >= 0; i--) {
    if (Number(arr[i]) % 2 === 0) {
      arr[i] = ''
    } else {
      break
    }
  }

  return arr.join('')
};

console.log(largestOddNumber('4206'))