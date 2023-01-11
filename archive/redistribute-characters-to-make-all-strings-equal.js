const makeEqual = function(words) {
  const obj = {}

  words.forEach(word => {
    word.split('').forEach(l => {
      if (obj[l]===undefined) {
        obj[l] = 1
      } else {
        obj[l]++
      }
    })
  })

  const correctValue = words.length
  let ans = true
  Object.keys(obj).forEach(key => {
    if (obj[key] % correctValue !==0) {
      ans = false
    }
  })

  return ans
};

console.log(makeEqual(["ab","a"]))