const garbageCollection = function (garbage, travel) {
  let m = 0;
  let p = 0;
  let g = 0;

  let cm = 0
  let cp = 0
  let cg = 0
  
  garbage.forEach((el, i) => {
    el.split('').forEach(el => {
      if (el === 'G') {
        g = i
        cg++
      }

      if (el === 'P') {
        p = i
        cp++
      }

      if (el === 'M') {
        m = i
        cm++
      }
    })
  })

  let rm = 0
  let rg = 0
  let rp = 0

  let sum = 0
  for (let i = 0; i < travel.length; i++) {
    sum+=travel[i]

    if (i + 1 === m) {
      rm = sum
    }

    if (i + 1 === p) {
      rp = sum
    }

    if (i + 1 === g) {
      rg = sum
    }
  }

  return rp + rm + rg + cm + cp + cg
}

console.log(garbageCollection( ["MMM","PGM","GP"], [3,10]))