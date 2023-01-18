const countOperations = function(num1, num2) {
  let i = 0
  while (num1 > 0 && num2 > 0) {
    i++
    if (num2 > num1) {
      num2-=num1
    } else {
      num1-=num2
    }
  }

  return i
}