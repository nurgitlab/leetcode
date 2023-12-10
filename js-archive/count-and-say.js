var countAndSay = function (n) {
  if (n === 0) return '0'
  let str = '1'
  for (let i = 0; i < n - 1; i++) {
    str = iter(str)
  }
  return str
};

function iter(str) {
  let ans = ''
  str.split('')
  let count = 1
  for (let i = 0; i < str.length; i++) {
    let mem = str[i]
    count = 1
    while (str[i] === str[i + 1]) {
      count++
      i++
    }
    ans += `${count}` + mem
  }

  return ans
}

console.log(countAndSay(0))