const busyStudent = function(startTime, endTime, queryTime) {
  let ans = 0
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      ans++
    }
  }

  return ans
};