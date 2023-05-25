let decode = function(encoded, first) {
  let ans = [first]

  encoded.forEach(el => {
    ans.push(el ^ ans[ans.length - 1])
  })

  return ans
}