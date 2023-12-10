const smallestNumber = function (pattern) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  pattern = pattern.split('')

  let ans = Infinity

  function rec(newPattern, availableNums) {
    if (isInclude(newPattern)) {
      ans = Math.min(ans, Number(newPattern.join('')))
    }

    if (availableNums.length === 9) {
      for (let i = 0; i < availableNums.length; i++) {
        rec([...newPattern, availableNums[i]], availableNums.filter(el => el !== availableNums[i]))
      }
    } else {
      for (let i = newPattern.length - 1; i >= 0; i--) {
        if (typeof newPattern[i] === "string") {
          availableNums.forEach((el) => {
            if (newPattern[i] === 'D') {
              if (el > newPattern[i + 1]) {
                rec(newPattern.map((z, k) => {
                  if (i === k) {
                    return el
                  } else {
                    return z
                  }
                }), availableNums.filter(z => z !== el))
              }
            } else {
              if (el < newPattern[i + 1]) {
                rec(newPattern.map((z, k) => {
                  if (i === k) {
                    return el
                  } else {
                    return z
                  }
                }), availableNums.filter(z => z !== el))
              }
            }
          })
          break
        }
      }
    }
  }

  rec(pattern, numbers)

  return String(ans)
}

function isInclude(arr) {
  let ans = true
  arr.forEach(el => {
    if (typeof el === "string") {
      ans = false
    }
  })

  return ans
}

console.log(smallestNumber("DDD"))