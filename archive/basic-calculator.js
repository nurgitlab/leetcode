const calculate = function (s) {
  return solveWithout(s)
}

function solveWithout(str) {
  let deletedSpaces = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      deletedSpaces += str[i]
    }
  }

  let nums = []
  let local = ''
  let operations = []
  let ans = 0
  for (let i = 0; i < deletedSpaces.length; i++) {
    if (deletedSpaces[i] === '+'
      || deletedSpaces[i] === '-') {
      operations.push(deletedSpaces[i])
      nums.push(Number(local))
      local = ''
    } else {
      local+=deletedSpaces[i]
    }
  }

  if (local.length > 0) {nums.push(Number(local))}

  let m = 0
  nums.forEach(n => {
    if (operations[m] === '+') {}
    m++
  })
  return nums
}

console.log(calculate('2-101  + 2 '))