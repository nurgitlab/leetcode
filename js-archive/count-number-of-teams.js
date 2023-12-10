const numTeams = function (rating) {
  let ans = 0
  for (let i = 0; i < rating.length - 2; i++) {
    for (let j = i + 1; j < rating.length - 1; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if ((
          rating[i] < rating[j] && rating[j] < rating[k]
        ) || (
          rating[i] > rating[j] && rating[j] > rating[k]
        )) {
          ans++
        }
      }
    }
  }

  return ans
}

console.log(numTeams([2, 5, 3, 4, 1]))