const alternateDigitSum = function(n) {
  let arr = []
  String(n).split('').forEach((el, i) => {
    arr.push(Math.pow(-1, i) * el)
  })

  return arr.reduce((sum, el) => sum+=el)
}