const maximum69Number = function (num) {
  let nums = num.toString().split('')

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === '6') {
      nums[i] = '9'
      break
    }
  }
  return Number(nums.join(''))
};

console.log(maximum69Number(9999))