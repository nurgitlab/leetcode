var lemonadeChange = function (bills) {
  const mem = {
    '5': 0,
    '10': 0,
    '20': 0,
  }

  let ans = true

  for (let i = 0; i < bills.length; i++) {
    const currentBill = bills[i]
    mem[`${currentBill}`]++

    if (currentBill === 10) {
      if (mem['5'] > 0) {
        mem['5']--
      } else {
        ans = false
      }
    }
    if (currentBill === 20) {
      if (mem['5'] > 0 && mem['10'] > 0) {
        mem['5']--
        mem['10']--
      } else if (mem['5'] > 2) {
        mem['5'] -= 3
      } else {
        ans = false
      }
    }

    if (!ans) {
      break
    }
  }

  return ans
};

console.log(lemonadeChange([5, 5, 10, 10, 20]))