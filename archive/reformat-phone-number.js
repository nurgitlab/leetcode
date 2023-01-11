const reformatNumber = function (number) {
  let n = number.split('').filter(el => (el.charCodeAt(0) >= 47 && el.charCodeAt(0) <= 57))

  let ans = []

  while (n.length > 0) {
    if (n.length > 4) {
      ans.push(n[0] + n[1] + n[2])
      n = n.slice(3)
    } else if (n.length === 4) {
      ans.push(n[0] + n[1])
      ans.push(n[2] + n[3])
      n = n.slice(4)
    } else if (n.length === 3) {
      ans.push(n[0] + n[1] + n[2])
      n = n.slice(3)
    } else if (n.length === 2) {
      ans.push(n[0] + n[1])
      n = n.slice(2)
    }
  }
  return ans.join('-')
}

console.log(reformatNumber("123 4-5678"))


//48-57