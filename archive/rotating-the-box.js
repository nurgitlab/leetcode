const rotateTheBox = function (box) {
  console.log(box)
  for (let i = 0; i < box.length; i++) {
    let arr = box[i].join('').split('*')
    arr.forEach((str, ind) => {
      arr[ind] = str.split('').sort((a, b) => {
        if (a > b) {
          return -1
        } else {
          return 1
        }
      }).join('')
    })
    box[i] = arr.join('*').split('')
  }

  let ans = []

  for (let j = 0; j < box[0].length; j++) {
    let s = []
    for (let i = box.length - 1; i >=0 ; i--) {
      s.push(box[i][j])
    }
    ans.push(s)
  }
  return ans
};

console.log(rotateTheBox([["#","#","*",".","*","."],
  ["#","#","#","*",".","."],
  ["#","#","#",".","#","."]]))