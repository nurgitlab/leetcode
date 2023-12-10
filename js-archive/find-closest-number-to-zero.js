const findClosestNumber = function(nums) {
  let ans = []
  let minOt = Infinity


  nums.forEach(el => {
    if (Math.abs(el) < minOt) {
      ans = [el]
      minOt = Math.abs(el)
    } else if (Math.abs(el) === minOt) {
      ans.push(el)
    }
  })

  return ans.sort((a,b) => a - b)[ans.length - 1]
};