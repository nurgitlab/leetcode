const constructRectangle = function(area) {
  let maxValid = 1
  for (let i = 1; i < Math.floor(Math.sqrt(area)) + 1; i++) {
    if (area % i === 0) {
      maxValid = i
    }
  }

  return [area / maxValid, maxValid]
}