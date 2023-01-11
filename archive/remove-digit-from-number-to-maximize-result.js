const removeDigit = function (number, digit) {
  let index = []

  number.split('').forEach((el, i) => {
    if (digit === el) {
      index.push(i)
    }
  })

  let ans = ''

  index.forEach((ind, i) => {
    let r = ''
    for (let j = 0; j < number.length; j++) {
      if (ind === j) {
        continue
      } else {
        r += number[j]
      }
    }
    ans = bigger(ans, r)
  })

  return `${ans}`
}

function bigger (l1,l2) {
  if (l1.length > l2.length) {
    return l1
  } else if (l1.length < l2.length) {
    return l2
  } else {
    for (let i = 0; i < l1.length; i++) {
      if (Number(l1[i]) > Number(l2[i])) {
        return l1
      }

      if (Number(l1[i]) < Number(l2[i])) {
        return l2
      }
    }

    return l1
  }
}

console.log(removeDigit("133235", "3"))