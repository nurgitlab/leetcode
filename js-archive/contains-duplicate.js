var containsDuplicate = function (nums) {
  let s = new Set()
  nums.forEach(el => {
    s.add(el)
  })

  return (s.size !== nums.length)
};

console.log(containsDuplicate([1, 2, 3, 1]))