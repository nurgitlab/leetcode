/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
  let a = 0, b = 0

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === colors[i + 1] && colors[i] === colors[i - 1]) {
      if (colors[i] === 'A') {a++} else {b++}
    }
  }

  return a - b > 0
};