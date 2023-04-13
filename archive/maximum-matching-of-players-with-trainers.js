/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
  players = players.sort((a,b) => a - b)
  trainers = trainers.sort((a,b) => a - b)

  let [i, j, ans] = [0, 0, 0]

  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) {
      ans++
      i++
      j++
    } else {
      j++
    }
  }

  return ans
};