const getDecimalValue = function(head) {

}

function binToNum (str) {
  let ans = 0
  str = str.split('').reverse()
  for (let i = 0; i < str.length; i++) {
    ans+=Math.pow(2, i) * Number(str[i])
  }

  return ans
}

console.log(binToNum('100'))

console.log(getDecimalValue())