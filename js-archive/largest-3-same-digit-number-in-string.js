const largestGoodInteger = function (num) {
  let arr = num.split('')
  let mem = ['ggg', -1]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      if (mem[1] < arr[i]) {
        mem[1] = arr[i]
        mem[0] = `${arr[i]}${arr[i]}${arr[i]}`
      }
    }
  }

  if (mem[1] === -1) {
    return ''
  } else {
    return mem[0]
  }
};

console.log(largestGoodInteger('6777133339'))