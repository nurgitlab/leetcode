const replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity
    for (let j = i + 1; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j]
      }
    }
    arr[i] = max
    if (i === arr.length - 1) {
      arr[i] = -1
    }
  }
  return arr
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))