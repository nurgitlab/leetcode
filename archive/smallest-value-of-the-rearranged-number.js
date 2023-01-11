const smallestNumber = function(num) {
  if (num > 0) {
    num = String(num)
    num = num.split('').sort((a,b) =>  a.charCodeAt(0) - b.charCodeAt(0))
    let cz = 0
    num.forEach(el => el === '0' && cz++)
    num = num.filter(el => el !== '0')
    let [ans] = num
    for (let i = 0; i < cz; i++) {
      ans+='0'
    }
    for (let i = 1; i < num.length; i++) {
      ans+=num[i]
    }
    return Number(ans)
  } else if (num === 0) {
    return 0
  } else {
    num = String(-num)
    num = num.split('').sort((a,b) => - a.charCodeAt(0) + b.charCodeAt(0))

    return -Number(num.join(''))
  }
}

console.log(smallestNumber(-7650))

