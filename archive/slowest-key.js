const slowestKey = function(releaseTimes, keysPressed) {
  let arr = keysPressed.split('').map(letter => [letter, 0])

  if (arr.length === 1) {return arr[0][0]}
  arr[0][1] = releaseTimes[0]
  let maxTime = releaseTimes[0]
  let lettersWithMinTime = [keysPressed[0]]
  for (let i = 1; i < arr.length; i++) {
    let prevTime = releaseTimes[i-1]
    let currentTime = releaseTimes[i] - prevTime
    arr[i][1] = currentTime

    if (maxTime < currentTime) {
      maxTime = currentTime
      lettersWithMinTime = [arr[i][0]]
    } else if (maxTime === currentTime) {
      lettersWithMinTime = [...lettersWithMinTime, arr[i][0]]
    }
  }

  lettersWithMinTime.sort((a,b) => {
    if (a.charCodeAt(0) > b.charCodeAt(0)) {
      return 1
    } else {
      return -1
    }
  })
  return lettersWithMinTime[lettersWithMinTime.length - 1]
};

console.log(slowestKey([9,29,49,50], "cbcd"))