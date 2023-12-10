/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  let arr = String(num).split('').map(el => Number(el)).sort((a,b) => a - b)
  let [a,b] = ['', '']
  console.log(arr)

  for (let i = 0; i < arr.length; i+=2) {
    a+=arr[i]
    if (arr[i + 1]) {
      b+=arr[i + 1]
    }
  }

  [a,b] = [Number(a), Number(b)]

  return a + b
};