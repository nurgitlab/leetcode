const hammingWeight = function(n) {
  const str = n.toString(2).split('')
  let ans = 0
  str.forEach(el => {
    if (el === '1') {
      ans++
    }
  })

  return ans
};

console.log(hammingWeight(1011))