const isLongPressedName = function(name, typed) {
  let mem1 = toArr(name)
  let mem2 = toArr(typed)
  if (mem1.length !== mem2.length) {
    return false
  }

  let ans = true
  mem1.forEach((el, i) => {
    if (el[0]!==mem2[i][0]) {ans = false}
    if (el[1] > mem2[i][1]) {ans = false}
  })

  return ans
}

function toArr (name) {
  let mem = []

  for (let i = 0; i < name.length; i++) {
    let j = 1
    while (name[i]===name[i+1]){
      i++
      j++
    } 
    mem.push([name[i],j])
  }

  return mem
}

console.log(isLongPressedName("alex", "aaleex"))