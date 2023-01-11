const average = function (salary) {
  let min = Infinity
  let cMin = 0
  let max = -Infinity
  let cMax = 0

  salary.forEach(el => {
    if (el < min) {
      min = el
      cMin = 1
    } else if (el === min) {
      cMin++
    }

    if (el > max) {
      max = el
      cMax = 1
    } else if (el === max) {
      cMax++
    }
  })

  let sum = 0
  salary.forEach(el => {
    if (el !== min && el !== max) {
      sum += el
    }
  })

  return sum / (salary.length - cMin - cMax)
};

console.log(average([4000,3000,1000,2000]))