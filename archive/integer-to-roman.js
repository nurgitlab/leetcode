var intToRoman = function (num) {
  let ans = []
  let m = ''
  for (let i = 0; i < num.toString().length; i++) {
    let currentNum = Math.floor(num / (10 ** i)) % (10)
    if (i < 3) {
      ans.push(toRoman(i, currentNum))
    } else {
      m += currentNum
    }
  }
  m = m.split('').reverse().join('')

  for (let i = 0; i < m; i++) {
    ans.push('M')
  }
  return ans.reverse().join('')
};

function toRoman(i, currentNum) {
  let currentAns = ''
  let a, b, c
  if (i === 0) {
    a = 'I'
    b = 'V'
    c = 'X'
  } else if (i === 1) {
    a = 'X'
    b = 'L'
    c = 'C'
  } else if (i === 2) {
    a = 'C'
    b = 'D'
    c = 'M'
  }
  if (currentNum === 0) {
    currentAns += ''
  } else if (currentNum === 1) {
    currentAns += `${a}`
  } else if (currentNum === 2) {
    currentAns += `${a}${a}`
  } else if (currentNum === 3) {
    currentAns += `${a}${a}${a}`
  } else if (currentNum === 4) {
    currentAns += `${a}${b}`
  } else if (currentNum === 5) {
    currentAns += `${b}`
  } else if (currentNum === 6) {
    currentAns += `${b}${a}`
  } else if (currentNum === 7) {
    currentAns += `${b}${a}${a}`
  } else if (currentNum === 8) {
    currentAns += `${b}${a}${a}${a}`
  } else if (currentNum === 9) {
    currentAns += `${a}${c}`
  }

  return currentAns
}


console.log(intToRoman(2000))