const asteroidsDestroyed = function(mass, asteroids) {
  asteroids = asteroids.sort((a,b) => a - b)

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] <= mass) {
      mass+=asteroids[i]
    } else {
      return false
    }
  }

  return true
}

console.log(asteroidsDestroyed( 10,  [3,9,19,5,21]))