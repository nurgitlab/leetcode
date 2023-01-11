const largestInteger = function (num) {
  let s = num.toString().split('')
  let mem = []
  let c1 = []
  let c2 = []
  for (let i = 0; i < s.length; i++) {
    let n = Number(s[i])
    mem[i] = n % 2 === 0
    if (mem[i]) {
      c1.push(n)
    } else {
      c2.push(n)
    }
  }
  c1 = arrSort(c1)
  c2 = arrSort(c2)
  let k = 0;
  let j = 0;

  for (let i = 0; i < mem.length; i++) {
    if (mem[i]) {
      mem[i] = c1[k] + ''
      k++
    } else {
      mem[i] = c2[j] + ''
      j++
    }
  }
  return Number(mem.join(''))
};

function arrSort(arr) {
  return arr.sort((a, b) => b - a)
}

console.log(largestInteger(1234))

//55875587