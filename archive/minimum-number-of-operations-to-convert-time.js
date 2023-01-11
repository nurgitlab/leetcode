const convertTime = function(current, correct) {
  let r = strToNum(correct) - strToNum(current)
  let ans = 0
  ans+= Math.floor(r/60)
  r %=60
  ans+= Math.floor(r/15)
  r%=15
  ans+= Math.floor(r/5)
  r%=5
  ans+= r

  return ans
};

function strToNum (str) {
  let arr = str.split(':')
  let h = Number(arr[0])
  let m = Number(arr[1])

  return h*60 + m
}

console.log(convertTime("02:30", "04:35"))