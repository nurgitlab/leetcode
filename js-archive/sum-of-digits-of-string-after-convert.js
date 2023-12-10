const getLucky = function (s, k) {
  let nums = ''
  s.split('').forEach(el => {
    nums += letterToNum(el)
  })

  for (let i = 0; i < k; i++) {
    nums = compress(nums)
  }

  return nums
};

function letterToNum(l) {
  return l.charCodeAt(0) - 96
}

function compress(n) {
  let sum = 0
  n.split('').forEach(el => sum += Number(el))

  return `${sum}`
}

console.log(getLucky('zbax', 2))