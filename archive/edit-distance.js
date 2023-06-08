/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let mat = Array(word1.length + 1).fill(null).map(() => Array(word2.length + 1).fill(0))

  for (let i = 0; i < mat.length; i++) mat[i][0] = i
  for (let i = 0; i < mat[0].length; i++) mat[0][i] = i

  for (let i = 1; i < mat.length; i++) {
    for (let j = 1; j < mat[0].length; j++) {
      mat[i][j] = Math.min(
        mat[i - 1][j] + 1,
        mat[i][j - 1] + 1,
        mat[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1)
      )
    }
  }

  return mat.at(-1).at(-1)
}