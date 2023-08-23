var convertToTitle = function(columnNumber) {
  console.log('a'.charCodeAt(0))
  console.log(String.fromCharCode(97))

  let k = 1

  while (columnNumber > 26 ** k) {
    columnNumber-=26 ** k
    k++
  }
  columnNumber-=1

  let ans = Array(k).fill(0)

  for (let i = 0; i < ans.length; i++) {
    ans[i] = Math.floor(columnNumber / 26 ** (k - i - 1))
    columnNumber = columnNumber % 26 ** (k - i - 1)
  }

  return ans.map(el => String.fromCharCode(el + 97)).join('').toUpperCase()
};