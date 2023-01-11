const sortByBits = function (arr) {
  arr.forEach((el, i) => {
    arr[i] = [el, countOfBites(numToStr(el))]
  })

  arr.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1
    } else if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1
      } else {
        return -1
      }
    } else {
      return -1
    }
  })

  arr.forEach((el, i) => {
    arr[i] = el[0]
  })
  return arr
};

function numToStr(num) {
  let ans = ''
  while (num > 0) {
    ans += num % 2
    num = Math.floor(num / 2)
  }
  if (ans === '') {
    ans = '0'
  }

  return ans.split('').reverse().join('')
}

function countOfBites(str) {
  let ans = 0
  str.split('').forEach(el => {
    if (Number(el) === 1) {
      ans++
    }
  })

  return ans
}

console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]))