const canReach = function(arr, start) {
  let mem = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      mem.push(i)
    }
    arr[i] = [arr[i], false]
  }

  function correctId (id) {
      return id >= 0 && id <arr.length
  }

  function goToNextElement (id) {
    arr[id][1] = true
    let dist = arr[id][0]
    if (correctId(id + dist)) {
      if (arr[id + dist][1] === false) {
        goToNextElement(id + dist)
      }
    }

    if (correctId(id - dist)) {
      if (arr[id - dist][1] === false) {
        goToNextElement(id - dist)
      }
    }
  }

  goToNextElement(start)
  let ans = false
  for (let i = 0; i < mem.length; i++) {
    ans||=arr[mem[i]][1]
  }

  return ans
};

console.log(canReach([4,2,3,0, 0, 0, 3,1,2], 5))