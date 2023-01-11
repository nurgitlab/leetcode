const strongPasswordCheckerII = function(password) {
  if (password.length < 8) {return false}
  if (password.toLowerCase() === password) {
    return false
  }

  if (password.toUpperCase() === password) {
    return false
  }

  let numbers = 0
  let special = 0

  password.split('').forEach(el => {
    if (el === '0') {
      numbers++
    }
    if (el === '1') {
      numbers++
    }
    if (el === '2') {
      numbers++
    }
    if (el === '3') {
      numbers++
    }
    if (el === '4') {
      numbers++
    }
    if (el === '5') {
      numbers++
    }
    if (el === '6') {
      numbers++
    }
    if (el === '7') {
      numbers++
    }
    if (el === '8') {
      numbers++
    }
    if (el === '9') {
      numbers++
    }
    //Это решения посвящается Диме Митрофанову

    if (el === '!') {
      special++
    }
    if (el === '@') {
      special++
    }
    if (el === '#') {
      special++
    }
    if (el === '$') {
      special++
    }
    if (el === '%') {
      special++
    }
    if (el === '^') {
      special++
    }

    if (el === '&') {
      special++
    }
    if (el === '*') {
      special++
    }
    if (el === '(') {
      special++
    }
    if (el === ')') {
      special++
    }
    if (el === '+') {
      special++
    }
    if (el === '-') {
      special++
    }
  })

  if (numbers === 0) {
    return false
  }

  if (special === 0) {
    return false
  }

  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i+1]) {return false}
  }
  return true
}

console.log(strongPasswordCheckerII("IloveLe3tcode!"))