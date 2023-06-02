const asteroidCollision = function(asteroids) {
  let stack = []

  asteroids.forEach(val => {
    while (!isSame(stack.at(-1), val)) {
      if (Math.abs(val) > Math.abs(stack.at(-1))) {
        stack.pop()
      } else if (Math.abs(val) === Math.abs(stack.at(-1) || 0)) {
        stack.pop()
        return;
      } else {
        return;
      }
    }
    stack.push(val)
  })

  return stack
}

function isSame (n1, n2) {
  if (n1 === undefined || n2 === undefined) return true

  if (n1 < 0 && n2 > 0) return true
  if ((n1 > 0 && n2 > 0) || (n1 < 0 && n2 < 0)) {
    return true
  }

  return false
}