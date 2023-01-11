var reorderedPowerOf2 = function (n) {
  let s = `${n}`
  let set = new Set()

  function allCombs(leg, arr) {
    if (leg < 2) {
      let str = arr.join('')
      if (str.length > 0) {
        if (str[0] !== '0') {
          set.add(Number(str))
        }
      }
    } else {
      for (let i = 0; i < leg; i++) {
        let mem = arr[i]
        arr[i] = arr[leg - 1]
        arr[leg - 1] = mem
        allCombs(leg - 1, arr)
        mem = arr[i]
        arr[i] = arr[leg - 1]
        arr[leg - 1] = mem
      }
    }
  }

  allCombs(s.length, s.split(''))

  let mem = [...set]

  let ans = false
  mem.forEach(el => {
    if (isPowerOfTwo(el)) {
      ans = true
    }
  })

  return ans
};

function isPowerOfTwo(num) {
  let s = 1
  let ans = false
  for (let i = 0; i < num; i++) {

    if (s === num) {
      ans = true
      break
    } else if (s > num) {
      break
    }
    s *= 2
  }

  return ans
}

console.log(reorderedPowerOf2(1))