var shipWithinDays = function(weights, days) {
  let sum = weights.reduce((s, el) => s + el, 0)
  let power = Math.max(
    weights.reduce((acc, el) => el > acc ? el : acc, 0),
    Math.floor(sum/days)
  )

  while (true) {
    let currentPower = power, currentDays = 1
    for (let i = 0; i < weights.length; i++) {
      if (currentPower >= weights[i]) {
        currentPower-=weights[i]
      } else {
        currentDays++
        currentPower=power
        currentPower-=weights[i]
      }
    }
    if (currentDays <= days) break
    power++
  }

  return power
};