const checkIfExist = function (arr) {
  let ans = false
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i === j) {
        continue
      } else if (arr[i] === arr[j] * 2 || arr[i] * 2 === arr[j]) {
        ans = true
        break
      }
    }
    if (ans) break
  }

  return ans
};

console.log(checkIfExist([0,0]))