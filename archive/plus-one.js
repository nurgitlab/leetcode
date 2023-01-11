var plusOne = function (digits) {
  let memReg = 0
  digits[digits.length - 1] += 1
  for (let j = digits.length - 1; j >= 0; j--) {
    let s = digits[j] + memReg
    memReg = 0
    digits[j] = s % 10
    if (s > 9) {
      memReg = 1
    } else {
      memReg = 0
    }
  }

  if (memReg > 0) {
    return [memReg, ...digits]
  } else {
    return digits
  }
};

console.log(plusOne([0]))