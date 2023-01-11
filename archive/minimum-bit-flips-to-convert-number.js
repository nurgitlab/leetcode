const minBitFlips = function(start, goal) {
  let bits1 = numToBits(start)
  let bits2 = numToBits(goal)

  if (bits1.length < bits2.length) {
    let mem = bits1
    bits1 = bits2
    bits2 = mem
  }

  let add = ''
  for (let i = bits2.length; i < bits1.length; i++) {
    add+='0'
  }

  bits2 = add + bits2

  let ans = 0

  for (let i = 0; i < bits1.length; i++) {
    if (bits1[i]!==bits2[i]) {ans++}
  }

  return ans
};

const numToBits = (num) => {
  let ans = ''
  while (num > 0) {
    ans+= num % 2
    num = Math.floor(num / 2)
  }

  return ans.split('').reverse().join('')
}

console.log(minBitFlips(3, 4))