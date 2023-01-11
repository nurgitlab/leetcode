const findEvenNumbers = function (digits) {
  const set = new Set()
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) {
      continue
    } else {
      for (let j = 0; j < digits.length; j++) {
        if (i === j) {
          continue
        } else {
          for (let k = 0; k < digits.length; k++) {
            if (k === i || k === j) {
              continue
            }
            let num = `${digits[i]}${digits[j]}${digits[k]}`
            num = Number(num)
            if (num % 2 === 0) {
              set.add(num)
            }
          }
        }
      }
    }
  }
  let ans = [...set]

  ans.sort((a,b) => (a-b))
  return ans
};

console.log(findEvenNumbers([2, 1, 3, 0]))