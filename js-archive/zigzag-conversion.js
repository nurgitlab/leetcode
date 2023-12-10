/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let [mem, row, toUp] = [{}, 0, true]

  for (let i = 0; i < s.length; i++) {
    if (mem[row] === undefined) {mem[row] = ''}

    mem[row]+=s[i]

    if (toUp) {
      row+=1
      if (row === numRows) {
        row = numRows - 2
        toUp = false
      }
    } else {
      row-=1
      if (row === -1) {
        row = 1
        toUp = true
      }
    }
  }



  return Object.values(mem).join('')
};