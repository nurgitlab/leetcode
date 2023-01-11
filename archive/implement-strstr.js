var strStr = function (haystack, needle) {
  let arr1 = haystack.split("")
  let arr2 = needle.split("")
  let ans = -1

  for (let i = 0; i < arr1.length; i++) {
    let flag = true
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i + j] !== arr2[j]) {
        flag = false
        break
      }
    }

    if (flag) {
      ans = i

      break
    }
  }

  return ans
};

console.log(strStr("aaaaaaa", "ba"))