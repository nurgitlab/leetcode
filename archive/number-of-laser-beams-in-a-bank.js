const numberOfBeams = function(bank) {
  let lamps = []

  bank.forEach(line => {
    let ed = 0
    line.split('').forEach(el => {
      if (el === '1') {ed++}
    })
    if (ed > 0) {
      lamps.push(ed)
    }
  })

  if (lamps.length > 1) {
    let mem = 0
    for (let i = 0; i < lamps.length - 1; i++) {
      mem+=lamps[i]*lamps[i+1]
    }
    return  mem
  } else {
    return 0
  }
}

console.log(numberOfBeams(["011001","000000","010100","001000"]))