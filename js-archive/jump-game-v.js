const maxJumps = function (arr, d) {
  let mem = {}
  let max = 0

  function jumpFrom(startId, s) {
    console.log(startId, s)
    let canJump = []
    for (let i = startId + 1; i <= startId + d; i++) {
      if (i < arr.length) {
        if (arr[i] >= arr[startId]) {
          break
        } else {
          canJump.push(i)
        }
      } else break
    }

    for (let i = startId - 1; i >= startId - d; i--) {
      if (i >= 0) {
        if (arr[i] >= arr[startId]) {
          break
        } else {
          canJump.push(i)
        }
      } else break
    }
    if (canJump.length === 0) {
      return 0
    } else {
      let maxCan = 0
      canJump.forEach(id => {
        if (mem[id] === undefined) {
          mem[id] = jumpFrom(id, s + 1)
        }

        maxCan = Math.max(mem[id], maxCan)
      })

      return maxCan + 1
    }
  }

  for (let i = 0; i < arr.length; i++) {
    mem[i] = jumpFrom(i, 0)
  }

  let mi = 0
  Object.keys(mem).forEach(k => {
    if (mem[k] > mi) {
      mi = mem[k]
    }
  })
  return mi + 1
}

console.log(maxJumps(
  [6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2
))