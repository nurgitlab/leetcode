const longestWord = function(words) {
  let ans = ''
  let set = new Set(words)
  for (let i = 0; i <words.length; i++) {
    let g = ''
    for (let j = 0; j < words[i].length; j++) {
      g+=words[i][j]
      if (set.has(g)) {
        if (g.length > ans.length) {
          ans = g
        } else if (g.length === ans.length) {
          for (let k= 0; k < ans.length; k++) {
            if (g[k] !== ans[k]) {
              if (g[k].charCodeAt(0) < ans[k].charCodeAt(0)) {
                ans = g
              } else {break}
            }
          }
        }
      } else break
    }
  }
  return ans
}

console.log(longestWord(["t","ti","tig","tige","tiger","e","en","eng","engl","engli","englis","english","h","hi","his","hist","histo","histor","history"]))