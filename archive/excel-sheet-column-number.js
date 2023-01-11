var titleToNumber = function (columnTitle) {
  columnTitle = columnTitle.split('').reverse().join('')
  let m = 1
  let sum = 0
  for (let i = 0; i < columnTitle.length; i++) {
    sum += m * (columnTitle[i].charCodeAt(0) - 64)
    m = m * 26
  }

  return sum
};
//A - 65
//Z - 90

console.log(titleToNumber('ZY'))