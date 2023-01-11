const findFinalValue = function(nums, original) {
  let s = new Set(nums)
  while (s.has(original)) { original*=2}
  return original
};

console.log(findFinalValue( [2,7,9], 4))