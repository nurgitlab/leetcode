const sumOddLengthSubarrays = function(arr) {
  let sum = 0
  for (let i = 1; i<=arr.length; i+=2) {
    for (let j = 0; j < arr.length - i + 1; j++) {
      let s = 0
      for (let k = j; k < j + i; k++) {
        s+=arr[k]
      }
      sum+=s
    }
  }

  return sum
}

console.log(sumOddLengthSubarrays([1,4,2,5,3]))