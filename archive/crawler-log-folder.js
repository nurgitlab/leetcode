const minOperations = function(logs) {
  let ans = 0
  logs.forEach(el => {
    if (el === '../') {
      if (ans > 0) {ans--}
    } else if (el !== './') {
      ans++
    }
  })

  return ans
}

console.log(minOperations(["d1/","d2/","../","d21/","./"]))