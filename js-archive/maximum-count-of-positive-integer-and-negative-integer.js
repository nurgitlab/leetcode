const maximumCount = function (nums) {
  let m1 = 0
  let m2 = 0
  nums.forEach(el => el > 0 ? m1++ : el < 0 && m2++)

  return Math.max(m1, m2)
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]))