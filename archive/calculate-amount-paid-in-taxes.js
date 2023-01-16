const calculateTax = function(brackets, income) {
  let ans = 0
  let prev = 0
  for (let i = 0; i < brackets.length; i++) {
    let [top, proc] = brackets[i]
    if (income > top) {
      ans+=(top-prev)*proc/100
    } else {
      ans+=(income - prev)*proc/100
      break
    }
    prev=top
  }

  return ans
}

console.log(calculateTax(
  [[1,0],[4,25],[5,50]], 2
))