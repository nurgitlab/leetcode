var selfDividingNumbers = function (left, right) {
  let ans = []
  for (let i = left; i <= right; i++) {
    if (isDiv(i)) {
      ans.push(i)
    }
  }

  return ans
};

function isDiv(num) {
  let ans = true
  let numStr = String(num)
  for (let i = 0; i < numStr.length; i++) {
    if (num % Number(numStr[i]) === 0) {
      continue
    } else {
      ans = false
      break
    }
  }

  return ans
}

console.log(selfDividingNumbers(1, 22))
