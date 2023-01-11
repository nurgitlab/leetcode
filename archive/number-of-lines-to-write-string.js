const numberOfLines = function(widths, s) {
  let mem = {}
  for (let i = 97; i<= 122; i++) {
    mem[String.fromCharCode(i)] = widths[i - 97]
  }
  //97 a
  //122 z

  let line = 0
  let counter = 0
  s.split('').forEach(el => {
    if (line - mem[el] >= 0) {
      line-=mem[el]
    } else {
      counter++
      line = 100 - mem[el]
    }
  })
  return [counter, 100 - line]
}

console.log(numberOfLines(
  [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
  "bbbcccdddaaa"
))