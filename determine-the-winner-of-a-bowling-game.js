/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
  let [s1, s2] = [0, 0]

  for (let i = 0; i < player1.length; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      s1+=player1[i] * 2
    } else {
      s1+=player1[i]
    }

    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      s2+=player2[i] * 2
    } else {
      s2+=player2[i]
    }
  }

  if (s1 > s2) {
    return 1
  }

  if (s1 === s2) {
    return 0
  }

  return 2
};