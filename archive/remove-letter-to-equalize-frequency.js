/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function(word) {
  let mem = {}
  word.split('').forEach(l => {
    if (mem[l] === undefined) {mem[l] = 0}
    mem[l]+=1
  })

  let set = new Set()
  Object.keys(mem).forEach(k => {
    set.add(mem[k])
  })

  if (set.size === 1) {
    let arr = [...set]

    if (arr[0] === 1) {
      return true
    }

    if ((new Set(word.split('')).size === 1)) {return true}
  }

  if (set.size === 2) {
    let arr = [...set]

    if (true) {
      let max = 0
      let min = 0
      if (arr[0] > arr[1]) {
        max = arr[0]
        min = arr[1]
      } else {
        max = arr[1]
        min = arr[0]
      }

      let maxEl = []
      let minEl = []
      Object.keys(mem).forEach(k => {
        if (mem[k] === max) {
          maxEl.push(k)
        }

        if (mem[k] === min) {
          minEl.push(k)
        }
      })

      if (maxEl.length === 1) {
        if (max - 1 === min) {
          return true
        }
      }
      console.log(min, minEl)
      if (minEl.length === 1) {
        if (1 === min) {
          return true
        }
      }
    }
  }

  return false
};