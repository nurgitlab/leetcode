const numberOfRounds = function (loginTime, logoutTime) {
  let aStart = toAbsoluteTime(loginTime)
  let aEnd = toAbsoluteTime(logoutTime)
  if (aEnd < aStart) {
    aEnd += 24 * 60
  }

  let startGame
  if (aStart % 15 !== 0) {
    startGame = aStart - aStart % 15 + 15
  } else {
    startGame = aStart
  }
  let endGame = aEnd - aEnd % 15
  console.log(aStart, startGame)
  console.log(startGame, endGame)
  return Math.max(0, endGame - startGame) / 15
}

function toAbsoluteTime(str) {
  let aTime = str.split(':')
  return Number(aTime[0]) * 60 + Number(aTime[1])
}

console.log(numberOfRounds("21:30",
"03:00"))