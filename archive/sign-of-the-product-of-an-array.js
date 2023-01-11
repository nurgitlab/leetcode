const arraySign = function (nums) {
  nums = nums.map(el => sign(el))

  let p = 1
  nums.forEach(el => p*=el)

  return p
}

function sign (x) {
  if (x > 0) {
    return 1
  } else if (x === 0) {
    return 0
  }

  return  -1
}

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]))