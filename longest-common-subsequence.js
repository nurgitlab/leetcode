/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  //  abcde
  //a 11111
  //c 11222
  //e 11223

  let mat = []
  for (let i = 0; i < text1.length; i++) {
    mat.push(Array(text2.length).fill(0))
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (text1[i] === text2[j]) {
        if (i > 0 && j > 0) {
          mat[i][j] = mat[i - 1][j - 1] + 1
        } else {
          mat[i][j] = 1
        }
      } else {
        let a = 0, b = 0
        if (i > 0) a = mat[i - 1][j]
        if (j > 0) b = mat[i][j - 1]

        mat[i][j] = Math.max(a, b)
      }
    }
  }
  return mat[text1.length - 1][text2.length - 1]
}

//  abcba
//a 11111
//b 12222
//c
//b
//c
//b
//a