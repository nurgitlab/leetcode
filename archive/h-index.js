const hIndex = function(citations) {
  citations = citations.sort((a,b) => b -a)
  let ans = 0

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {ans = i + 1}
  }

  return ans
}

console.log(hIndex([1,3,1]))