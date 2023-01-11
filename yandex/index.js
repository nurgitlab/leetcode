const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = [];
let arr2 = [];

let n = 0

rl.on('line', line => {
  arr.push(line);
  if (arr.length === 1) {
    n = Number(arr[0])

    if (n > 0) {

      rl.on('line', line => {
        arr2.push(Number(line));
        if (arr2.length === n) {
          let maxSum = 0
          let sum = 0
          for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] === 1) {
              sum++
            } else {
              sum = 0
            }
            if (maxSum < sum) {
              maxSum = sum
            }
          }

          console.log(maxSum)

          rl.close()
        }
      })
    } else if (n === 0) {
      console.log(0)
    } else {
      console.log(-1)
    }
  }
})

