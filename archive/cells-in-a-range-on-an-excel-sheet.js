const cellsInRange = function(s) {
  let alphabet = []

  let l1 = s[0].charCodeAt(0)
  let l2 = s[3].charCodeAt(0)
  let n1 = Number(s[1])
  let n2 = Number(s[4])

  for (let i = l1; i <= l2; i++) {
    for (let j = n1; j <=n2; j++) {
      alphabet.push(String.fromCharCode(i) + j)
    }
  }

  return alphabet
}

console.log(cellsInRange( "A1:F1"))