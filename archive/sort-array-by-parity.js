const sortArrayByParity = function(nums) {
  let a1 = []
  let a2 = []

  nums.forEach(n => {
    if (n % 2 === 0) {
      a1.push(n)
    } else {
      a2.push(n)
    }
  })

  return [...a1, ...a2]
};