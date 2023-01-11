var searchRange = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0]
    } else {
      return [-1, -1]
    }
  }
  let otr = Math.floor((nums.length + 1) / 2)
  let edin = 0
  let id = otr
  let find = false

  while (!find) {
    if (nums[id] === target) {
      find = true
      break
    } else {
      if (otr <= 1) {
        if (edin > 5) {
          id = -1
          break
        }
        otr = 1
        edin += 1
      } else {
        otr = Math.floor((otr) / 2)
      }
      if (nums[id] > target) {
        id = id - otr
      } else {
        id = id + otr
      }
    }
  }

  if (id === -1) {
    return [-1, -1]
  }

  let ok1 = false
  let ok2 = false
  let m = 0
  while (!(ok1 && ok2)) {
    m++
    if (nums[id + m] !== nums[id]) {
      ok1 = true
    }
    if (nums[id - m] !== nums[id]) {
      ok2 = true
    }
  }
  m--

  if (nums[id + m] === nums[id]) {
    return [id, id + m]
  } else {
    return [id - m, id]
  }
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))