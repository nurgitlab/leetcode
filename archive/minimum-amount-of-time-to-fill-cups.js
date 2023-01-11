const fillCups = function (amount) {
  let time = 0
  while (arrSum(amount) > 0) {
    time++
    amount.sort((a,b) => a - b)
    if (amount[1] > 0) {
      amount[1]-=1
    }
    if (amount[2] > 0) {
      amount[2]-=1
    }
  }

  return time
}

function arrSum(arr) {
  let s = 0
  arr.forEach(el => s += el)
  return s
}

console.log(fillCups([5, 4, 4]))
//4 4 5 //0
//4 0 1 //4
//0 1 4 //4
//0 0 3 //5
//0 0 0 //8

//4 3 4 -1
//3 3 3 -2
//2 3 2 -3
//1 2 2 -4
//1 1 1 -5
//0 0 1 -6
//0 0 0 -7