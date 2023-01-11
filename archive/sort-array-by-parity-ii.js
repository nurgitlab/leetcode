const sortArrayByParityII = function(nums) {
  let c1 = []
  let c2 = []

  nums.forEach(n => {
    if (n % 2 === 0) {
      c1.push(n)
    } else {
      c2.push(n)
    }
  })

  let k = 0;
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = c1[k]
      k++
    } else {
      nums[i] = c2[l]
      l++
    }
  }

  return nums
};

console.log(sortArrayByParityII( [4,2,5,7]))