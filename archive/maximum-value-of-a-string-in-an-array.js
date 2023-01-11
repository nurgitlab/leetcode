const maximumValue = function(strs) {
  let maxVal = 0
  strs.forEach(el => {
    if (isOnlyNumbers(el)) {
      maxVal = Math.max(Number(el), maxVal)
    } else {
      maxVal = Math.max(el.length, maxVal)
    }
  })

  return maxVal
}

function isOnlyNumbers (str) {
  let ans = true
  str.split('').forEach(el => {
    if (!(el.charCodeAt(0) >= 48 && el.charCodeAt(0) <=57)) {
      ans = false
    }
  })

  return ans
}

console.log(maximumValue(["alic3","bob","3","4","00000"]))