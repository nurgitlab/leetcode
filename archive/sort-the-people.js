const sortPeople = function(names, heights) {
  let doubleArr = []
  names.forEach((el, i) => {
    doubleArr[i] = [el, heights[i]]
  })
  doubleArr.sort((a,b) => b[1] - a[1])

  let ans = []
  doubleArr.forEach(el => {
    ans.push(el[0])
  })

  return ans
};