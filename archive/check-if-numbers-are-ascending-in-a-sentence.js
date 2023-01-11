const areNumbersAscending = function(s) {
  let arr = s.replace(/[^0-9]/g," ").replace(/ +/g, ' ').trim().split(' ')
  let ans = true
  console.log(arr)
  for (let i = 0; i < arr.length - 1; i++){
    console.log(Number(arr[i]) , Number(arr[i+1]))
    if (Number(arr[i]) >= Number(arr[i+1])) {
      ans = false
      break
    }
  }
  return ans
};


console.log(areNumbersAscending( "hello world 5 x 5"))