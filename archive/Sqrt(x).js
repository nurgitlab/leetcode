var mySqrt = function (x) {
  if (x === 1 || x === 0) return x
  let myX = Math.floor(x / 2)
  let plec = Math.floor(x / 4)
  let finded = false
  let prevX = null

  while (!finded) {
    if (prevX === myX) {
      break
    }
    prevX = myX
    console.log("myX", myX)

    if (myX * myX > x) {
      if ((myX - 1) * (myX - 1) < x) {
        finded = true
        break
      }
      myX = Math.floor(myX - plec)
    } else if (myX * myX < x) {
      if ((myX + 1) * (myX + 1) > x) {
        finded = true
        break
      }
      myX = Math.floor(myX + plec)
    } else {
      finded = true
    }

    plec = Math.floor(plec / 2)

  }

  if (myX * myX > x) {
    while (myX * myX > x) {
      myX--
    }
  }

  if ((myX + 1) * (myX + 1) <= x) {
    while ((myX + 1) * (myX + 1) <= x) {
      myX++
    }
  }

  return myX
};

console.log(mySqrt(1025073664))