const earliestFullBloom = function (plantTime, growTime) {
  let max = 0
  let pl = 0

  let cpl = plantTime.map((el, i) => [el, growTime[i]])
  cpl = cpl.sort((a,b) => (b[1]) - (a[1]))
  plantTime = cpl.map(el => el[0])
  growTime = cpl.map(el => el[1])
  for (let i = 0; i < plantTime.length; i++){
    pl+=plantTime[i]

    max = Math.max(pl + growTime[i], max)
  }

  return max
}


console.log(earliestFullBloom([3,11,29,4,4,26,26,12,13,10,30,19,27,2,10], [10,13,22,17,18,15,21,11,24,14,18,23,1,30,6]))