const sortSentence = function(s) {
  let arr = s.split(' ')
  let ans = []
  arr.forEach(el => {
    ans[Number(el[el.length - 1])] = el.slice(0, el.length - 1)
  })
  ans.shift()
  return ans.join(' ')
};

console.log(sortSentence( "is2 sentence4 This1 a3"))